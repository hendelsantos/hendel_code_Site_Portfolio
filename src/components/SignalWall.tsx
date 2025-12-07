"use client";

import React, { useEffect, useState } from "react";
import { fetchGitHubRepos, GitHubRepo } from "@/lib/github";
import styles from "./SignalWall.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function SignalWall() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const { t } = useLanguage();

    useEffect(() => {
        fetchGitHubRepos("hendelsantos").then(setRepos);
    }, []);

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>The Signal <span className={styles.sub}>Transmissions detected</span></h2>

            <div className={styles.grid}>
                {repos.map((repo) => (
                    <div key={repo.id} className={styles.monitor}>
                        <div className={styles.screen}>
                            <div className={styles.content}>
                                <h3 className={styles.repoName}>{repo.name}</h3>
                                <p className={styles.repoDesc}>{repo.description}</p>
                                <div className={styles.meta}>
                                    <span className={styles.lang}>{repo.language}</span>
                                    <span className={styles.stars}>★ {repo.stargazers_count}</span>
                                </div>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    ACCESS DATA
                                </a>
                            </div>
                            <div className={styles.scanlines}></div>
                            <div className={styles.glitchOverlay}></div>
                        </div>
                        <div className={styles.frame}></div>
                    </div>
                ))}
                {/* Fillers for empty spaces if needed */}
                {repos.length === 0 && Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className={styles.monitor}>
                        <div className={`${styles.screen} ${styles.off}`}></div>
                        <div className={styles.frame}></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
