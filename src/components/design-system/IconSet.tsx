"use client";

import styles from "./IconSet.module.css";

export default function IconSet() {
    const icons = [
        { name: "Spray", symbol: "🎨" },
        { name: "Lightning", symbol: "⚡" },
        { name: "Star", symbol: "✨" },
        { name: "Fire", symbol: "🔥" },
        { name: "Rocket", symbol: "🚀" },
        { name: "Puzzle", symbol: "🧩" },
        { name: "Target", symbol: "🎯" },
        { name: "Diamond", symbol: "💎" },
        { name: "Crown", symbol: "👑" },
        { name: "Atom", symbol: "⚛️" },
        { name: "Code", symbol: "💻" },
        { name: "Design", symbol: "🎨" }
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                <span className={styles.glow}>Icon</span> Set
            </h2>
            <p className={styles.description}>
                Vibrant icons with neon glow effects
            </p>

            <div className={styles.iconGrid}>
                {icons.map((icon, index) => (
                    <div key={index} className={styles.iconCard}>
                        <div className={styles.iconSymbol}>{icon.symbol}</div>
                        <p className={styles.iconName}>{icon.name}</p>
                    </div>
                ))}
            </div>

            {/* SVG Icons Section */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Custom SVG Icons</h3>
                <div className={styles.svgGrid}>
                    {/* Neon Circle */}
                    <div className={styles.svgCard}>
                        <svg className={styles.svg} viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="#00ffff"
                                strokeWidth="4"
                                className={styles.neonCircle}
                            />
                        </svg>
                        <p className={styles.svgName}>Neon Circle</p>
                    </div>

                    {/* Lightning Bolt */}
                    <div className={styles.svgCard}>
                        <svg className={styles.svg} viewBox="0 0 100 100">
                            <path
                                d="M50 10 L30 50 L50 50 L40 90 L70 40 L50 40 Z"
                                fill="#ccff00"
                                className={styles.lightning}
                            />
                        </svg>
                        <p className={styles.svgName}>Lightning</p>
                    </div>

                    {/* Star */}
                    <div className={styles.svgCard}>
                        <svg className={styles.svg} viewBox="0 0 100 100">
                            <polygon
                                points="50,15 61,40 88,40 67,57 73,82 50,67 27,82 33,57 12,40 39,40"
                                fill="#ff00ff"
                                className={styles.star}
                            />
                        </svg>
                        <p className={styles.svgName}>Star</p>
                    </div>

                    {/* Hexagon */}
                    <div className={styles.svgCard}>
                        <svg className={styles.svg} viewBox="0 0 100 100">
                            <polygon
                                points="50,10 85,30 85,70 50,90 15,70 15,30"
                                fill="none"
                                stroke="#ff6600"
                                strokeWidth="4"
                                className={styles.hexagon}
                            />
                        </svg>
                        <p className={styles.svgName}>Hexagon</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
