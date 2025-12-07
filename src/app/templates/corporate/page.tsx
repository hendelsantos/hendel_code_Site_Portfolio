import styles from "./corporate.module.css";
import Link from "next/link";

export default function CorporatePage() {
    return (
        <main className={styles.page}>
            <nav className={styles.nav}>
                <div className={styles.logo}>Hendel.Studio</div>
                <ul className={styles.links}>
                    <li>Work</li>
                    <li>Approach</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heading}>Designing clarity <br /> in a complex world.</h1>
                    <p className={styles.subtext}>
                        We build digital experiences that prioritize function, elegance, and longevity.
                        No noise. Only signal.
                    </p>
                    <Link href="/" className={styles.cta}>
                        View Portfolio
                    </Link>
                </div>

                <div className={styles.heroImage}></div>
            </header>

            <footer className={styles.footer}>
                <div>© 2024 Hendel Studio</div>
                <div>Minimalism as a Service.</div>
            </footer>
        </main>
    );
}
