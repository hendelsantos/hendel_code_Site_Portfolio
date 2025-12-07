"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Hero.module.css";
import { useEffect, useState } from "react";

export default function Hero() {
    const { t } = useLanguage();
    const [offsetY, setOffsetY] = useState(0);

    // Parallax / subtle movement effect
    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.fog}></div>
            <div className={styles.content} style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
                <h1 className={styles.title}>
                    <span className={styles.glitch} data-text="HENDEL">HENDEL</span> <br />
                    <span className={styles.glitch} data-text="CODE">CODE</span>
                </h1>
                <div className={styles.separator}></div>
                <p className={styles.subtitle}>{t("hero_subtitle")}</p>
            </div>
            <div className={styles.scrollIndicator}>
                <span></span>
            </div>
        </section>
    );
}
