"use client";

import { useLanguage } from "../context/LanguageContext";
import styles from "./LanguageSwitch.module.css";

export default function LanguageSwitch() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={styles.switchContainer}>
            <button
                className={`${styles.langBtn} ${language === "pt" ? styles.active : ""}`}
                onClick={() => setLanguage("pt")}
            >
                BR
            </button>
            <span className={styles.separator}>/</span>
            <button
                className={`${styles.langBtn} ${language === "en" ? styles.active : ""}`}
                onClick={() => setLanguage("en")}
            >
                EN
            </button>
        </div>
    );
}
