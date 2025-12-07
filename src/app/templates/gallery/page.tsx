import styles from "./gallery.module.css";

export default function GalleryPage() {
    return (
        <main className={styles.gallery}>

            <section className={styles.section}>
                <div className={`${styles.bgImage} ${styles.img1}`}></div>
                <div className={styles.content}>
                    <h1 className={styles.title}>VISTA I</h1>
                    <p className={styles.desc}>The Blue Hour</p>
                </div>
                <div className={styles.scrollHint}>SCROLL &rarr;</div>
            </section>

            <section className={styles.section}>
                <div className={`${styles.bgImage} ${styles.img2}`}></div>
                <div className={styles.content}>
                    <h1 className={styles.title}>VISTA II</h1>
                    <p className={styles.desc}>Horizon Line</p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={`${styles.bgImage} ${styles.img3}`}></div>
                <div className={styles.content}>
                    <h1 className={styles.title}>VISTA III</h1>
                    <p className={styles.desc}>Urban Decay</p>
                </div>
            </section>

        </main>
    );
}
