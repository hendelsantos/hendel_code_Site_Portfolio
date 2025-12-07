"use client";

import React, { useEffect, useState } from "react";
import { fetchGitHubRepos, GitHubRepo } from "@/lib/github";
import styles from "./CommandCenter.module.css";

export default function CommandCenter() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [selectedRepo, setSelectedRepo] = useState<GitHubRepo | null>(null);
    const [systemLogs, setSystemLogs] = useState<string[]>([]);

    useEffect(() => {
        addLog("Inicializando Central de Comando...");
        fetchGitHubRepos("hendelsantos").then((data) => {
            setRepos(data);
            if (data.length > 0) setSelectedRepo(data[0]);
            addLog(`Link estabelecido. ${data.length} alvos encontrados.`);
        });
    }, []);

    const addLog = (msg: string) => {
        setSystemLogs(prev => [`[${new Date().toLocaleTimeString('pt-BR')}] ${msg}`, ...prev].slice(0, 10));
    };

    const handleSelect = (repo: GitHubRepo) => {
        setSelectedRepo(repo);
        addLog(`Alvo travado: ${repo.name}`);
    };

    // Calculate languages stats
    const languages = repos.reduce((acc, repo) => {
        const lang = repo.language || "Desconhecido";
        acc[lang] = (acc[lang] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const totalRepos = repos.length;

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>CENTRAL_DE_COMANDO_GITHUB <span className={styles.status}>ONLINE</span></h2>
                <div className={styles.clock}>{new Date().toLocaleDateString('pt-BR')}</div>
            </div>

            <div className={styles.grid}>
                {/* Panel 1: Target List */}
                <div className={`${styles.panel} ${styles.listPanel}`}>
                    <h3 className={styles.panelTitle}>ALVOS ATIVOS</h3>
                    <div className={styles.list}>
                        {repos.map(repo => (
                            <div
                                key={repo.id}
                                className={`${styles.listItem} ${selectedRepo?.id === repo.id ? styles.activeItem : ''}`}
                                onClick={() => handleSelect(repo)}
                            >
                                <span className={styles.repoName}>{repo.name}</span>
                                <span className={styles.repoLang}>{repo.language}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Panel 2: Main Viewport */}
                <div className={`${styles.panel} ${styles.mainPanel}`}>
                    {selectedRepo ? (
                        <>
                            <div className={styles.mainHeader}>
                                <h3 className={styles.mainTitle}>{selectedRepo.name}</h3>
                                <a href={selectedRepo.html_url} target="_blank" className={styles.deployBtn}>ACESSAR LINK</a>
                            </div>
                            <div className={styles.mainContent}>
                                <p className={styles.description}>{selectedRepo.description}</p>
                                <div className={styles.metaGrid}>
                                    <div className={styles.metaItem}>
                                        <label>VISIBILIDADE</label>
                                        <span>PÚBLICO</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <label>STARS</label>
                                        <span>{selectedRepo.stargazers_count} ★</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <label>LINGUAGEM</label>
                                        <span>{selectedRepo.language}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <label>ID</label>
                                        <span>#{selectedRepo.id}</span>
                                    </div>
                                </div>
                                <div className={styles.tags}>
                                    {selectedRepo.topics.map(topic => (
                                        <span key={topic} className={styles.tag}>[{topic}]</span>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className={styles.loading}>ESCANEANDO...</div>
                    )}
                </div>

                {/* Panel 3: Stats */}
                <div className={`${styles.panel} ${styles.statsPanel}`}>
                    <h3 className={styles.panelTitle}>DISTRIBUIÇÃO DE LINGUAGEM</h3>
                    <div className={styles.charts}>
                        {Object.entries(languages).map(([lang, count]) => (
                            <div key={lang} className={styles.barContainer}>
                                <div className={styles.barLabel}>
                                    <span>{lang}</span>
                                    <span>{Math.round((count / totalRepos) * 100)}%</span>
                                </div>
                                <div className={styles.barTrack}>
                                    <div
                                        className={styles.barFill}
                                        style={{ width: `${(count / totalRepos) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Panel 4: System Logs */}
                <div className={`${styles.panel} ${styles.logPanel}`}>
                    <h3 className={styles.panelTitle}>LOGS DO SISTEMA</h3>
                    <div className={styles.logs}>
                        {systemLogs.map((log, i) => (
                            <div key={i} className={styles.logLine}>{log}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* HUD Overlay Elements */}
            <div className={styles.hudCornerTopLeft}></div>
            <div className={styles.hudCornerTopRight}></div>
            <div className={styles.hudCornerBottomLeft}></div>
            <div className={styles.hudCornerBottomRight}></div>
        </section>
    );
}
