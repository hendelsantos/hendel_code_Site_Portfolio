"use client";

import styles from "./ColorPalette.module.css";
import { useState } from "react";

export default function ColorPalette() {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const colors = [
        { name: "Cyan Spray", hex: "#00ffff", rgb: "0, 255, 255", category: "primary" },
        { name: "Magenta Tag", hex: "#ff00ff", rgb: "255, 0, 255", category: "primary" },
        { name: "Lime Burst", hex: "#ccff00", rgb: "204, 255, 0", category: "primary" },
        { name: "Orange Flame", hex: "#ff6600", rgb: "255, 102, 0", category: "accent" },
        { name: "Purple Haze", hex: "#9d00ff", rgb: "157, 0, 255", category: "accent" },
        { name: "Concrete", hex: "#1a1a1a", rgb: "26, 26, 26", category: "neutral" },
        { name: "Shadow", hex: "#0a0a0a", rgb: "10, 10, 10", category: "neutral" },
        { name: "Mist", hex: "#888888", rgb: "136, 136, 136", category: "neutral" }
    ];

    const copyToClipboard = (hex: string, name: string) => {
        navigator.clipboard.writeText(hex);
        setCopiedColor(name);
        setTimeout(() => setCopiedColor(null), 2000);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                <span className={styles.spray}>Color</span> Palette
            </h2>
            <p className={styles.description}>
                Vibrant neon colors inspired by street art and urban culture
            </p>

            {/* Primary Colors */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Primary Colors</h3>
                <div className={styles.grid}>
                    {colors.filter(c => c.category === "primary").map((color) => (
                        <div
                            key={color.name}
                            className={styles.colorCard}
                            onClick={() => copyToClipboard(color.hex, color.name)}
                        >
                            <div
                                className={styles.colorSwatch}
                                style={{ backgroundColor: color.hex }}
                            >
                                <div className={styles.sprayEffect}></div>
                            </div>
                            <div className={styles.colorInfo}>
                                <h4 className={styles.colorName}>{color.name}</h4>
                                <p className={styles.colorHex}>{color.hex}</p>
                                <p className={styles.colorRgb}>RGB: {color.rgb}</p>
                                {copiedColor === color.name && (
                                    <span className={styles.copied}>Copied!</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Accent Colors */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Accent Colors</h3>
                <div className={styles.grid}>
                    {colors.filter(c => c.category === "accent").map((color) => (
                        <div
                            key={color.name}
                            className={styles.colorCard}
                            onClick={() => copyToClipboard(color.hex, color.name)}
                        >
                            <div
                                className={styles.colorSwatch}
                                style={{ backgroundColor: color.hex }}
                            >
                                <div className={styles.sprayEffect}></div>
                            </div>
                            <div className={styles.colorInfo}>
                                <h4 className={styles.colorName}>{color.name}</h4>
                                <p className={styles.colorHex}>{color.hex}</p>
                                <p className={styles.colorRgb}>RGB: {color.rgb}</p>
                                {copiedColor === color.name && (
                                    <span className={styles.copied}>Copied!</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Neutral Colors */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Neutral Colors</h3>
                <div className={styles.grid}>
                    {colors.filter(c => c.category === "neutral").map((color) => (
                        <div
                            key={color.name}
                            className={styles.colorCard}
                            onClick={() => copyToClipboard(color.hex, color.name)}
                        >
                            <div
                                className={styles.colorSwatch}
                                style={{ backgroundColor: color.hex }}
                            >
                                <div className={styles.sprayEffect}></div>
                            </div>
                            <div className={styles.colorInfo}>
                                <h4 className={styles.colorName}>{color.name}</h4>
                                <p className={styles.colorHex}>{color.hex}</p>
                                <p className={styles.colorRgb}>RGB: {color.rgb}</p>
                                {copiedColor === color.name && (
                                    <span className={styles.copied}>Copied!</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
