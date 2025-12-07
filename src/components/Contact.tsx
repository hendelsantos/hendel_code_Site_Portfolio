"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Contact.module.css";
import { useState } from "react";

export default function Contact() {
    const { t } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [budget, setBudget] = useState("");
    const [message, setMessage] = useState("");

    // Status State
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, budget, message }),
            });

            if (res.ok) {
                setStatus('success');
                // Reset form
                setName("");
                setEmail("");
                setSubject("");
                setBudget("");
                setMessage("");
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className={styles.contact}>
            <h2 className={styles.title}>{t("contact")}</h2>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.group}>
                        <input
                            type="text"
                            required
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label className={`${styles.label} ${name ? styles.activeLabel : ''}`}>{t("contact_name")}</label>
                    </div>
                    <div className={styles.group}>
                        <input
                            type="email"
                            required
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className={`${styles.label} ${email ? styles.activeLabel : ''}`}>{t("contact_email")}</label>
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
                        <input
                            type="text"
                            className={styles.input}
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                        />
                        <label className={`${styles.label} ${budget ? styles.activeLabel : ''}`}>{t("contact_budget")}</label>
                    </div>
                    <div className={styles.group}>
                        <textarea
                            required
                            className={`${styles.input} ${styles.textarea}`}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <label className={`${styles.label} ${message ? styles.activeLabel : ''}`}>{t("contact_message")}</label>
                    </div>

                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={status === 'loading' || status === 'success'}
                        style={{
                            opacity: status === 'loading' ? 0.7 : 1,
                            backgroundColor: status === 'success' ? '#0f0' : (status === 'error' ? '#f00' : undefined),
                            color: status === 'success' || status === 'error' ? '#000' : undefined
                        }}
                    >
                        {status === 'loading' ? 'Sending...' :
                            status === 'success' ? 'Transmission Sent' :
                                status === 'error' ? 'Error: Retrying' :
                                    t("contact_submit")}
                    </button>
                </form>
            </div>
        </section>
    );
}
