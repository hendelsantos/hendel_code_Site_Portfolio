"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Interfaces.module.css";
import Link from "next/link";

export default function Interfaces() {
    const { t } = useLanguage();

    const interfaces = [
        {
            id: "comic",
            titleKey: "interface_comic_title",
            descKey: "interface_comic_desc",
            link: "/templates/comic",
            previewClass: styles.previewComic,
            badges: ["Interactive", "Visual"]
        },
        {
            id: "mobile",
            titleKey: "interface_mobile_title",
            descKey: "interface_mobile_desc",
            link: "/templates/mobile",
            previewClass: styles.previewMobile,
            badges: ["Responsive", "Touch"]
        },
        {
            id: "gallery",
            titleKey: "interface_gallery_title",
            descKey: "interface_gallery_desc",
            link: "/templates/gallery",
            previewClass: styles.previewGallery,
            badges: ["Grid", "Visual"]
        },
        {
            id: "terminal",
            titleKey: "interface_terminal_title",
            descKey: "interface_terminal_desc",
            link: "/templates/terminal",
            previewClass: styles.previewTerminal,
            badges: ["CLI", "Animated"]
        },
        {
            id: "corporate",
            titleKey: "interface_corporate_title",
            descKey: "interface_corporate_desc",
            link: "/templates/corporate",
            previewClass: styles.previewCorporate,
            badges: ["Minimal", "Business"]
        }
    ];

    return (
        <section className={styles.interfaces}>
            <h2 className={styles.title}>{t("interfaces_title")}</h2>

            <div className={styles.grid}>
                {interfaces.map((item) => (
                    <Link href={item.link} key={item.id} className={styles.card}>
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
                                {t(item.titleKey)}
                                <span className={styles.arrow}>→</span>
                            </h3>
                            <p className={styles.cardDesc}>{t(item.descKey)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
