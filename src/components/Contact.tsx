"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Contact.module.css";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section className={styles.contact}>
            <h2 className={styles.title}>{t("contact")}</h2>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <div className={styles.group}>
                        <input type="text" required className={styles.input} />
                        <label className={styles.label}>Name</label>
                    </div>
                    <div className={styles.group}>
                        <input type="email" required className={styles.input} />
                        <label className={styles.label}>Email</label>
                    </div>
                    <div className={styles.group}>
                        <textarea required className={`${styles.input} ${styles.textarea}`}></textarea>
                        <label className={styles.label}>Message</label>
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                        Send Transmission
                    </button>
                </form>
            </div>
        </section>
    );
}
