"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Only run on client-side and non-touch devices ideally
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
            if (trailRef.current) {
                // Slight delay for trail effect
                setTimeout(() => {
                    if (trailRef.current) {
                        trailRef.current.style.left = `${e.clientX}px`;
                        trailRef.current.style.top = `${e.clientY}px`;
                    }
                }, 50);
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className={`${styles.cursor} ${isHovered ? styles.hovered : ''}`} />
            <div ref={trailRef} className={styles.trail} />
        </>
    );
}
