"use client";

import styles from "./AnimationShowcase.module.css";

export default function AnimationShowcase() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                <span className={styles.animated}>Animations</span> & Effects
            </h2>
            <p className={styles.description}>
                Dynamic animations for engaging user experiences
            </p>

            {/* Spray Reveal */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Spray Reveal</h3>
                <div className={styles.demoBox}>
                    <div className={styles.sprayReveal}>
                        <span>HOVER ME</span>
                    </div>
                </div>
            </section>

            {/* Neon Pulse */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Neon Pulse</h3>
                <div className={styles.demoBox}>
                    <div className={styles.neonPulse}>PULSING NEON</div>
                </div>
            </section>

            {/* Drip Effect */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Paint Drip</h3>
                <div className={styles.demoBox}>
                    <div className={styles.dripContainer}>
                        <div className={styles.dripText}>DRIP</div>
                        <div className={styles.drip1}></div>
                        <div className={styles.drip2}></div>
                        <div className={styles.drip3}></div>
                    </div>
                </div>
            </section>

            {/* Glitch Effect */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Glitch</h3>
                <div className={styles.demoBox}>
                    <div className={styles.glitch} data-text="GLITCH">GLITCH</div>
                </div>
            </section>

            {/* Gradient Shift */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Gradient Shift</h3>
                <div className={styles.demoBox}>
                    <div className={styles.gradientShift}>FLOWING COLORS</div>
                </div>
            </section>

            {/* Stagger Animation */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Stagger Animation</h3>
                <div className={styles.demoBox}>
                    <div className={styles.staggerContainer}>
                        <div className={styles.staggerItem} style={{ animationDelay: '0s' }}>1</div>
                        <div className={styles.staggerItem} style={{ animationDelay: '0.1s' }}>2</div>
                        <div className={styles.staggerItem} style={{ animationDelay: '0.2s' }}>3</div>
                        <div className={styles.staggerItem} style={{ animationDelay: '0.3s' }}>4</div>
                        <div className={styles.staggerItem} style={{ animationDelay: '0.4s' }}>5</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
