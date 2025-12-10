"use client";

import styles from "./TypographyShowcase.module.css";

export default function TypographyShowcase() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                <span className={styles.neon}>Typography</span> System
            </h2>
            <p className={styles.description}>
                Bold, expressive typography for maximum impact
            </p>

            {/* Headings */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Headings</h3>
                <div className={styles.showcase}>
                    <h1 className={styles.h1}>H1 - Graffiti Hero</h1>
                    <h2 className={styles.h2}>H2 - Street Title</h2>
                    <h3 className={styles.h3}>H3 - Urban Header</h3>
                    <h4 className={styles.h4}>H4 - Neon Subtitle</h4>
                    <h5 className={styles.h5}>H5 - Tag Label</h5>
                    <h6 className={styles.h6}>H6 - Micro Header</h6>
                </div>
            </section>

            {/* Body Text */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Body Text</h3>
                <div className={styles.showcase}>
                    <p className={styles.bodyLarge}>
                        Large Body - Perfect for introductions and important content that needs emphasis.
                    </p>
                    <p className={styles.bodyRegular}>
                        Regular Body - The standard text size for most content. Readable and comfortable for extended reading.
                    </p>
                    <p className={styles.bodySmall}>
                        Small Body - Used for secondary information, captions, and metadata.
                    </p>
                </div>
            </section>

            {/* Special Styles */}
            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Special Styles</h3>
                <div className={styles.showcase}>
                    <p className={styles.mono}>
                        Monospace - For code, technical content, and terminal-style text
                    </p>
                    <p className={styles.stencil}>
                        STENCIL STYLE - BOLD UPPERCASE FOR IMPACT
                    </p>
                    <p className={styles.gradient}>
                        Gradient Text - Vibrant multi-color text for special emphasis
                    </p>
                    <p className={styles.glow}>
                        Neon Glow - Text with glowing effect for cyberpunk aesthetic
                    </p>
                </div>
            </section>
        </div>
    );
}
