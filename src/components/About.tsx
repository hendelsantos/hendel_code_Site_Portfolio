"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./About.module.css";

export default function About() {
    const { t, language } = useLanguage();

    const bio = language === "pt"
        ? "Domino a Inteligência Artificial para acelerar o tangível, mas vou onde ela não alcança: na criatividade pura, nas vivências e na essência humana. Crio em torno do caos da mente, explorando as fronteiras entre lógica e imaginação. Este não é apenas um portfólio; é um experimento procedural em engenharia frontend, uma experiência imersiva feita de código e alma."
        : "I master Artificial Intelligence to accelerate the tangible, but I go where it cannot reach: into pure creativity, lived experiences, and human essence. I create around the chaos of the mind, exploring the frontiers between logic and imagination. This is not just a portfolio; it is a procedural experiment in frontend engineering, an immersive experience made of code and soul.";

    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t("about")}</h2>
                <p className={styles.bio}>{bio}</p>

                <div className={styles.skills}>
                    {["TypeScript", "Next.js", "React", "Node.js", "Python", "Postgres", "Web3", "SQLite", "Creative Coding"].map(skill => (
                        <span key={skill} className={styles.skill}>{skill}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
