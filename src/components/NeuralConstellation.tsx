"use client";

import React, { useEffect, useRef, useState } from "react";
import { fetchGitHubRepos, GitHubRepo } from "@/lib/github";
import styles from "./NeuralConstellation.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    repo: GitHubRepo;
}

export default function NeuralConstellation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [hoveredRepo, setHoveredRepo] = useState<GitHubRepo | null>(null);
    const { t } = useLanguage();

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

        // Initialize nodes
        const nodes: Node[] = repos.map((repo) => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.max(3, Math.min(8, 3 + repo.stargazers_count)),
            repo,
        }));

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const nodeA = nodes[i];
                    const nodeB = nodes[j];

                    // Connect if same language
                    if (nodeA.repo.language === nodeB.repo.language && nodeA.repo.language !== "Unknown") {
                        const dx = nodeA.x - nodeB.x;
                        const dy = nodeA.y - nodeB.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < 200) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 200})`;
                            ctx.moveTo(nodeA.x, nodeA.y);
                            ctx.lineTo(nodeB.x, nodeB.y);
                            ctx.stroke();
                        }
                    }
                }
            }

            // Draw nodes
            nodes.forEach((node) => {
                // Update position
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off walls
                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                // Draw star
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = node.repo.language === "TypeScript" ? "#3178c6"
                    : node.repo.language === "JavaScript" ? "#f7df1e"
                        : node.repo.language === "Python" ? "#3776ab"
                            : node.repo.language === "Solidity" ? "#363636"
                                : "#ffffff";
                ctx.fill();

                // Draw glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = ctx.fillStyle;
            });

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);
        const handleResize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };
        window.addEventListener("resize", handleResize);

        // Mouse Interaction
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            let found = null;
            for (const node of nodes) {
                const dx = mouseX - node.x;
                const dy = mouseY - node.y;
                if (Math.sqrt(dx * dx + dy * dy) < 20) {
                    found = node.repo;
                    break;
                }
            }
            setHoveredRepo(found);
        }

        // Using container ref for mouse move to capture even if off a tiny star
        canvas.addEventListener("mousemove", handleMouseMove);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
            canvas.removeEventListener("mousemove", handleMouseMove);
        };
    }, [repos]);

    return (
        <section className={styles.container} ref={containerRef}>
            <h2 className={styles.title}>Neural Constellations <span className={styles.sub}>GitHub Network</span></h2>
            <canvas ref={canvasRef} className={styles.canvas} />

            {hoveredRepo && (
                <div className={styles.tooltip} style={{ top: "20%", left: "50%", transform: "translateX(-50%)" }}>
                    <h3>{hoveredRepo.name}</h3>
                    <p>{hoveredRepo.description}</p>
                    <div className={styles.meta}>
                        <span>{hoveredRepo.language}</span>
                        <span>⭐ {hoveredRepo.stargazers_count}</span>
                    </div>
                    <a href={hoveredRepo.html_url} target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
            )}
        </section>
    );
}
