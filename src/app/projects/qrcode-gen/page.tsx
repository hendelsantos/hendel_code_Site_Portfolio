"use client";

import styles from "./qr.module.css";
import Link from "next/link";
import { useState } from "react";

export default function QrPage() {
    const [text, setText] = useState("Chaos");

    return (
        <main className={styles.container}>
            <div className={styles.scanlines}></div>

            <h1 className={styles.glitchTitle}>QR GEN</h1>

            <div className={styles.demoBox}>
                <div className={styles.qrPlaceholder}>
                    <div className={styles.qrNoise} style={{
                        transform: `rotate(${text.length * 10}deg)` // Fake change visually
                    }}></div>
                </div>

                <input
                    type="text"
                    className={styles.input}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter datastream..."
                />

                <a href="https://web-production-64115.up.railway.app/" target="_blank" className={styles.btn}>
                    GENERATE REAL QR
                </a>
            </div>

            <p style={{ maxWidth: '400px', textAlign: 'center', lineHeight: '1.6' }}>
                Instant generation. Zero latency. <br />
                The fastest bridge between physical and digital.
            </p>

            <Link href="/" className={styles.backLink}>
                // SYSTEM_EXIT
            </Link>
        </main>
    );
}
