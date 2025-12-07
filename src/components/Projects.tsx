"use client";

import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/lib/projects";
import styles from "./Projects.module.css";

export default function Projects() {
    const { t, language } = useLanguage();

    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>{t("projects")}</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <article key={project.id} className={styles.card}>
                        <div className={styles.cardContent}>
                            <span className={styles.type}>{project.type}</span>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.description}>{project.description[language]}</p>
                            <div className={styles.tags}>
                                {project.tags.map(tag => <span key={tag} className={styles.tag}>#{tag}</span>)}
                            </div>
                            <a href={project.link} className={styles.link}>View Project &rarr;</a>
                        </div>
                        <div className={styles.cardGlow}></div>
                    </article>
                ))}
            </div>
        </section>
    );
}
