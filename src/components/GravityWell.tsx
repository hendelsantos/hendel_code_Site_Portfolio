"use client";

import React, { useEffect, useRef, useState } from "react";
import { fetchGitHubRepos, GitHubRepo } from "@/lib/github";
import styles from "./GravityWell.module.css";

interface Point {
    x: number;
    y: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
}

interface Attractor {
    x: number;
    y: number;
    mass: number;
    repo: GitHubRepo;
}

export default function GravityWell() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [hoveredRepo, setHoveredRepo] = useState<GitHubRepo | null>(null);

    useEffect(() => {
        fetchGitHubRepos("hendelsantos").then(setRepos);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || repos.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        // Grid Configuration
        const gap = 30;
        const points: Point[] = [];
        for (let x = 0; x <= width; x += gap) {
            for (let y = 0; y <= height; y += gap) {
                points.push({ x, y, originX: x, originY: y, vx: 0, vy: 0 });
            }
        }

        // Initialize Attractors (Repos)
        // Distribute them in a spiral or circle
        const attractors: Attractor[] = repos.map((repo, i) => {
            const angle = (i / repos.length) * Math.PI * 2;
            const radius = Math.min(width, height) * 0.3;
            return {
                x: width / 2 + Math.cos(angle) * radius,
                y: height / 2 + Math.sin(angle) * radius,
                mass: 50 + (repo.stargazers_count * 5),
                repo
            };
        });

        let mouseX = -1000;
        let mouseY = -1000;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update Points Physics
            points.forEach(p => {
                let totalFx = 0;
                let totalFy = 0;

                // Spring force to origin
                const dx = p.x - p.originX;
                const dy = p.y - p.originY;
                totalFx -= dx * 0.05; // Stiffness
                totalFy -= dy * 0.05;

                // Attractor forces (Black Holes)
                attractors.forEach(a => {
                    const dx = a.x - p.x;
                    const dy = a.y - p.y;
                    const distSq = dx * dx + dy * dy;
                    const dist = Math.sqrt(distSq);

                    if (dist < 300) {
                        const force = a.mass / (distSq + 100);
                        totalFx += dx * force * 5; // Attractive force
                        totalFy += dy * force * 5;
                    }
                });

                // Mouse Repulsion (Interaction)
                const mdx = mouseX - p.x;
                const mdy = mouseY - p.y;
                const mdistSq = mdx * mdx + mdy * mdy;
                if (mdistSq < 10000) {
                    const force = -2000 / (mdistSq + 100); // Repulsive
                    totalFx += mdx * force;
                    totalFy += mdy * force;
                }

                // Apply forces
                p.vx += totalFx;
                p.vy += totalFy;
                p.vx *= 0.9; // Damping
                p.vy *= 0.9;
                p.x += p.vx;
                p.y += p.vy;
            });

            // Draw Grid Lines
            ctx.beginPath();
            ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
            ctx.lineWidth = 1;

            // Horizontal
            for (let y = 0; y <= height; y += gap) {
                // Find points in this row
                // Optimization: could map using indices, but brute force for simplicity in v1
                // Actually, let's just connect neighbors if we stored grid structure.
                // Since points array is flat, we know index structure:
                // cols = floor(width/gap) + 1
            }

            // Simplified Drawing: Draw dots mostly, or optimized lines?
            // Let's connect points that are neighbors naturally
            // Re-looping carefully
            const cols = Math.floor(width / gap) + 1;
            for (let i = 0; i < points.length; i++) {
                const p = points[i];
                const rightP = points[i + cols]; // Approx neighbor below? No, i+1 is right?
                // This flat array logic is tricky with resizing.
                // Let's just draw dots for simplicity + high performance physics feel, or lines if small amount.

                ctx.beginPath();
                ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(100, 100, 100, 0.5)";
                ctx.fill();
            }

            // Let's draw lines based on origin proximity to look like a grid
            // Or just draw the attractors nicely

            // Draw Attractors (Event Horizons)
            attractors.forEach(a => {
                ctx.beginPath();
                ctx.fillStyle = "#000"; // Black hole
                ctx.arc(a.x, a.y, 20, 0, Math.PI * 2);
                ctx.fill();

                // Accretion Disk (Glow)
                ctx.beginPath();
                ctx.strokeStyle = a.repo.language === "TypeScript" ? "#3178c6" : "#fff";
                ctx.lineWidth = 2;
                ctx.arc(a.x, a.y, 22 + Math.sin(Date.now() / 200) * 2, 0, Math.PI * 2);
                ctx.stroke();

                // Label
                ctx.fillStyle = "#fff";
                ctx.font = "12px monospace";
                ctx.textAlign = "center";
                ctx.fillText(a.repo.name, a.x, a.y + 40);
            });

            requestAnimationFrame(animate);
        };

        const animId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
            // Reset points on resize
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;

            // Check hover on attractors
            let found = null;
            for (const a of attractors) {
                const dx = mouseX - a.x;
                const dy = mouseY - a.y;
                if (dx * dx + dy * dy < 900) { // 30px radius
                    found = a.repo;
                }
            }
            setHoveredRepo(found);
        };

        window.addEventListener("resize", handleResize);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", () => { mouseX = -1000; mouseY = -1000; });
        canvas.addEventListener("click", () => {
            if (hoveredRepo) window.open(hoveredRepo.html_url, "_blank");
        });

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
            canvas.removeEventListener("mousemove", handleMouseMove);
        };
    }, [repos]);

    return (
        <section className={styles.container} ref={containerRef}>
            <h2 className={styles.title}>Gravity Well <span className={styles.sub}>Space-Time Code</span></h2>
            <canvas ref={canvasRef} className={styles.canvas} />
            {hoveredRepo && <div className={styles.cursorLabel}>Open {hoveredRepo.name}</div>}
        </section>
    );
}
