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
            previewClass: styles.previewComic
        },
        {
            id: "mobile",
            titleKey: "interface_mobile_title",
            descKey: "interface_mobile_desc",
            link: "/templates/mobile",
            previewClass: styles.previewMobile
        },
        {
            id: "gallery",
            titleKey: "interface_gallery_title",
            descKey: "interface_gallery_desc",
            link: "/templates/gallery",
            previewClass: styles.previewGallery
        },
        {
            id: "terminal",
            titleKey: "interface_terminal_title",
            descKey: "interface_terminal_desc",
            link: "/templates/terminal",
            previewClass: styles.previewTerminal
        },
        {
            id: "corporate",
            titleKey: "interface_corporate_title",
            descKey: "interface_corporate_desc",
            link: "/templates/corporate",
            previewClass: styles.previewCorporate
        }
    ];

    return (
        <section className={styles.interfaces}>
            <h2 className={styles.title}>{t("interfaces_title")}</h2>

            <div className={styles.grid}>
                {interfaces.map((item) => (
                    <Link href={item.link} key={item.id} className={styles.card}>
                        <div className={`${styles.preview} ${item.previewClass}`}></div>
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
