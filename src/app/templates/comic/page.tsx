import styles from "./comic.module.css";

export default function ComicPage() {
    return (
        <main className={styles.container}>
            <div className={styles.scrollContainer}>

                {/* Panel 1: Awakening */}
                <section className={`${styles.panel} ${styles.panel1}`}>
                    <div className={styles.visualElement}></div>
                    <div className={styles.dialogueBox} style={{ top: '20%', left: '10%' }}>
                        (Silent Signal Received...)
                    </div>
                    <div className={styles.nextHint}>↓</div>
                </section>

                {/* Panel 2: The Logic */}
                <section className={`${styles.panel} ${styles.panel2}`}>
                    <div className={styles.dialogueBox} style={{ bottom: '30%', right: '10%', transform: 'rotate(2deg)' }}>
                        Structure emerging from chaos.
                    </div>
                    <div style={{
                        width: '300px', height: '300px', border: '2px solid #fff',
                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: '10px'
                    }}>
                        <div style={{ background: 'rgba(255,255,255,0.2)' }}></div>
                        <div style={{ background: 'rgba(255,255,255,0.2)' }}></div>
                        <div style={{ background: 'rgba(255,255,255,0.2)' }}></div>
                        <div style={{ background: 'rgba(255,255,255,0.8)' }}></div>
                    </div>
                </section>

                {/* Panel 3: The Void */}
                <section className={`${styles.panel} ${styles.panel3}`}>
                    <h1 style={{ fontSize: '5rem', opacity: 0.1 }}>THE VOID</h1>
                    <div className={styles.dialogueBox} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        To be continued...
                    </div>
                </section>

            </div>
        </main>
    );
}
