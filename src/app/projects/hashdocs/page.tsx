"use client";

import styles from "./hashdocs.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HashDocsPage() {
    const [verifiedCount, setVerifiedCount] = useState(1284);

    useEffect(() => {
        const interval = setInterval(() => {
            setVerifiedCount(prev => prev + 1);
        }, 5000); // Simulate live transactions
        return () => clearInterval(interval);
    }, []);

    return (
        <main className={styles.container}>
            <div className={styles.gridBg}></div>

            <section className={styles.hero}>
                <div className={styles.shieldContainer}>
                    <div className={styles.hex}></div>
                    <div className={styles.hexInner}>🔒</div>
                </div>

                <h1 className={styles.title}>HASHDOCS</h1>
                <p className={styles.subtitle}>
                    Decentralized Public Notary on Polygon Network.
                    Immutable proof of existence for your digital assets.
                </p>

                <div className={styles.actions}>
                    <a href="https://www.hashdocs.com.br/" target="_blank" className={`${styles.btn} ${styles.btnPrimary}`}>
                        Launch DApp
                    </a>
                    <a href="https://github.com/hendelsantos" target="_blank" className={styles.btn}>
                        Smart Contract
                    </a>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>{verifiedCount}</span>
                        <span className={styles.statLabel}>Documents Verified</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>$0.01</span>
                        <span className={styles.statLabel}>Avg. Cost</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>100%</span>
                        <span className={styles.statLabel}>Uptime</span>
                    </div>
                </div>
            </section>

            {/* Back Button */}
            <Link href="/" style={{
                position: 'fixed', top: '20px', left: '20px', color: '#666', textDecoration: 'none', zIndex: 100
            }}>
                &larr; BACK TO CHAOS
            </Link>
        </main>
    );
}
