"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Contact.module.css";
import { useState } from "react";

export default function Contact() {
    const { t } = useLanguage();
    const [subject, setSubject] = useState("");

    return (
        <section className={styles.contact}>
            <h2 className={styles.title}>{t("contact")}</h2>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <div className={styles.group}>
                        <input type="text" required className={styles.input} />
                        <label className={styles.label}>{t("contact_name")}</label>
                    </div>
                    <div className={styles.group}>
                        <input type="email" required className={styles.input} />
                        <label className={styles.label}>{t("contact_email")}</label>
                    </div>
                    <div className={styles.group}>
                        <select
                            required
                            className={styles.select}
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        >
                            <option value="" disabled hidden></option>
                            <option value="project">{t("subject_project")}</option>
                            <option value="job">{t("subject_job")}</option>
                            <option value="collab">{t("subject_collab")}</option>
                            <option value="other">{t("subject_other")}</option>
                        </select>
                        <label className={`${styles.label} ${subject ? styles.activeLabel : ''}`}>{t("contact_subject")}</label>
                    </div>
                    <div className={styles.group}>
                        <input type="text" className={styles.input} />
                        <label className={styles.label}>{t("contact_budget")}</label>
                    </div>
                    <div className={styles.group}>
                        <textarea required className={`${styles.input} ${styles.textarea}`}></textarea>
                        <label className={styles.label}>{t("contact_message")}</label>
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                        {t("contact_submit")}
                    </button>
                </form>
            </div>
        </section>
    );
}
