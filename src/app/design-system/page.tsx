"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./design-system.module.css";
import ColorPalette from "@/components/design-system/ColorPalette";
import TypographyShowcase from "@/components/design-system/TypographyShowcase";
import ComponentLibrary from "@/components/design-system/ComponentLibrary";
import AnimationShowcase from "@/components/design-system/AnimationShowcase";
import IconSet from "@/components/design-system/IconSet";
import { useState } from "react";

export default function DesignSystemPage() {
    const { t } = useLanguage();
    const [activeSection, setActiveSection] = useState("colors");

    const sections = [
        { id: "colors", label: "Colors", icon: "🎨" },
        { id: "typography", label: "Typography", icon: "Aa" },
        { id: "components", label: "Components", icon: "🧩" },
        { id: "animations", label: "Animations", icon: "✨" },
        { id: "icons", label: "Icons", icon: "⚡" }
    ];

    return (
        <main className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        <span className={styles.spray}>THE</span>
                        <span className={styles.graffiti}>GRAFFITI</span>
                        <span className={styles.lab}>LAB</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        My universe of design, colors & components
                    </p>
                    <div className={styles.drip}></div>
                </div>
            </section>

            {/* Navigation Sidebar */}
            <nav className={styles.sidebar}>
                {sections.map((section) => (
                    <button
                        key={section.id}
                        className={`${styles.navItem} ${activeSection === section.id ? styles.active : ''}`}
                        onClick={() => setActiveSection(section.id)}
                    >
                        <span className={styles.navIcon}>{section.icon}</span>
                        <span className={styles.navLabel}>{section.label}</span>
                    </button>
                ))}
            </nav>

            {/* Content Area */}
            <div className={styles.content}>
                {activeSection === "colors" && <ColorPalette />}
                {activeSection === "typography" && <TypographyShowcase />}
                {activeSection === "components" && <ComponentLibrary />}
                {activeSection === "animations" && <AnimationShowcase />}
                {activeSection === "icons" && <IconSet />}
            </div>

            {/* Background Effects */}
            <div className={styles.bgTexture}></div>
            <div className={styles.neonGlow}></div>
        </main>
    );
}
