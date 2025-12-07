"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Services.module.css";

export default function Services() {
    const { t } = useLanguage();

    const services = [
        {
            id: "frontend",
            icon: "💻",
            titleKey: "service_frontend_title",
            descKey: "service_frontend_desc"
        },
        {
            id: "fullstack",
            icon: "⚙️",
            titleKey: "service_fullstack_title",
            descKey: "service_fullstack_desc"
        },
        {
            id: "uiux",
            icon: "🎨",
            titleKey: "service_ui_title",
            descKey: "service_ui_desc"
        }
    ];

    return (
        <section className={styles.services}>
            <h2 className={styles.title}>{t("services")}</h2>
            <div className={styles.grid}>
                {services.map((service) => (
                    <div key={service.id} className={styles.card}>
                        <div className={styles.icon}>{service.icon}</div>
                        <h3 className={styles.serviceTitle}>{t(service.titleKey)}</h3>
                        <p className={styles.serviceDesc}>{t(service.descKey)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
