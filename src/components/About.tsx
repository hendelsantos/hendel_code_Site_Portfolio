"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./About.module.css";

export default function About() {
    const { t, language } = useLanguage();

    const bio = language === "pt"
        ? "Sou um desenvolvedor apaixonado por criar experiências digitais que transcendem o comum. No caos do código, encontro a ordem da criatividade. Especializado em Frontend, mas navegando com facilidade pelo espectro Fullstack."
        : "I am a developer passionate about creating digital experiences that transcend the ordinary. In the chaos of code, I find the order of creativity. Specialized in Frontend, but navigating the Fullstack spectrum with ease.";

    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t("about")}</h2>
                <p className={styles.bio}>{bio}</p>

                <div className={styles.skills}>
                    {["TypeScript", "Next.js", "React", "Node.js", "SQLite", "Creative Coding"].map(skill => (
                        <span key={skill} className={styles.skill}>{skill}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
