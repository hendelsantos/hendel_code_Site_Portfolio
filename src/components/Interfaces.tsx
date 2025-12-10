"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Interfaces.module.css";
import Link from "next/link";

export default function Interfaces() {
    const { t } = useLanguage();

    const creativeSites = [
        {
            id: "nexus",
            title: "NEXUS",
            desc: "Portfólio de Arte Contemporânea - Pintor de quadros com galeria interativa e design vibrante",
            link: "https://portfoliofrontendnexus-production.up.railway.app/",
            previewClass: styles.previewNexus,
            badges: ["Arte", "Galeria", "Interativo"],
            isExternal: true
        },
        {
            id: "euphoria",
            title: "EUPHORIA 2024",
            desc: "Festival de Música Eletrônica - Landing page imersiva com lineup, experiências e galeria de momentos épicos",
            link: "https://portfoliofrontedeuphoria-production.up.railway.app/",
            previewClass: styles.previewEuphoria,
            badges: ["Festival", "Música", "Eventos"],
            isExternal: true
        }
    ];

    return (
        <section className={styles.interfaces}>
            <h2 className={styles.title}>{t("interfaces_title")}</h2>

            <div className={styles.grid}>
                {creativeSites.map((item) => (
                    <a
                        href={item.link}
                        key={item.id}
                        className={styles.card}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                    >
                        <div className={`${styles.preview} ${item.previewClass}`}>
                            <div className={styles.badges}>
                                {item.badges.map((badge) => (
                                    <span key={badge} className={styles.badge}>
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.cardTitle}>
                                {item.title}
                                <span className={styles.arrow}>→</span>
                            </h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
