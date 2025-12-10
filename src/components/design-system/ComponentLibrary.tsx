"use client";

import styles from "./ComponentLibrary.module.css";
import { useState } from "react";

export default function ComponentLibrary() {
    const [showCode, setShowCode] = useState<string | null>(null);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                <span className={styles.gradient}>Component</span> Library
            </h2>
            <p className={styles.description}>
                Reusable UI components with graffiti aesthetic
            </p>

            {/* Buttons */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Buttons</h3>
                <div className={styles.componentGrid}>
                    <div className={styles.componentCard}>
                        <button className={`${styles.btn} ${styles.btnPrimary}`}>Primary Button</button>
                        <p className={styles.label}>Cyan Neon</p>
                    </div>
                    <div className={styles.componentCard}>
                        <button className={`${styles.btn} ${styles.btnSecondary}`}>Secondary Button</button>
                        <p className={styles.label}>Magenta Border</p>
                    </div>
                    <div className={styles.componentCard}>
                        <button className={`${styles.btn} ${styles.btnGhost}`}>Ghost Button</button>
                        <p className={styles.label}>Transparent</p>
                    </div>
                    <div className={styles.componentCard}>
                        <button className={`${styles.btn} ${styles.btnNeon}`}>Neon Pulse</button>
                        <p className={styles.label}>Animated Glow</p>
                    </div>
                </div>
            </section>

            {/* Cards */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Cards</h3>
                <div className={styles.componentGrid}>
                    <div className={styles.cardGlass}>
                        <h4>Glassmorphic Card</h4>
                        <p>Transparent with blur effect</p>
                    </div>
                    <div className={styles.cardNeon}>
                        <h4>Neon Border Card</h4>
                        <p>Glowing cyan border</p>
                    </div>
                    <div className={styles.cardGraffiti}>
                        <div className={styles.sprayTag}>NEW</div>
                        <h4>Graffiti Style</h4>
                        <p>Urban street art vibe</p>
                    </div>
                </div>
            </section>

            {/* Form Elements */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Form Elements</h3>
                <div className={styles.formShowcase}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Text Input</label>
                        <input
                            type="text"
                            className={styles.formInput}
                            placeholder="Enter your tag name..."
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Textarea</label>
                        <textarea
                            className={styles.formTextarea}
                            placeholder="Write your message..."
                            rows={4}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Select</label>
                        <select className={styles.formSelect}>
                            <option>Choose your style</option>
                            <option>Graffiti</option>
                            <option>Street Art</option>
                            <option>Urban</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Badges */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Badges & Tags</h3>
                <div className={styles.badgeShowcase}>
                    <span className={styles.badgeCyan}>Cyan</span>
                    <span className={styles.badgeMagenta}>Magenta</span>
                    <span className={styles.badgeLime}>Lime</span>
                    <span className={styles.badgeOrange}>Orange</span>
                    <span className={styles.badgePurple}>Purple</span>
                </div>
            </section>
        </div>
    );
}
