import styles from "./pdv.module.css";
import Link from "next/link";

export default function PdvPage() {
    return (
        <main className={styles.container}>
            <div className={styles.dashboard}>
                <aside className={styles.sidebar}>
                    <div className={`${styles.navItem} ${styles.active}`}>● Dashboard</div>
                    <div className={styles.navItem}>○ Inventory</div>
                    <div className={styles.navItem}>○ Sales</div>
                    <div className={styles.navItem}>○ Settings</div>
                </aside>

                <section className={styles.main}>
                    <div className={styles.header}>
                        <h1>OmniPOS SaaS</h1>
                        <p style={{ color: '#888' }}>Enterprise Retail Management</p>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={styles.card}>
                            <div className={styles.cardTitle}>Total Revenue</div>
                            <div className={styles.cardValue}>$128k</div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardTitle}>Active Users</div>
                            <div className={styles.cardValue}>4,290</div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardTitle}>Growth</div>
                            <div className={styles.cardValue} style={{ color: '#0f0' }}>+24%</div>
                        </div>
                    </div>

                    <div className={styles.chart}>
                        <div className={styles.bar} style={{ height: '30%' }}></div>
                        <div className={styles.bar} style={{ height: '50%' }}></div>
                        <div className={styles.bar} style={{ height: '40%' }}></div>
                        <div className={styles.bar} style={{ height: '70%' }}></div>
                        <div className={styles.bar} style={{ height: '60%' }}></div>
                        <div className={styles.bar} style={{ height: '85%' }}></div>
                        <div className={styles.bar} style={{ height: '100%' }}></div>
                    </div>
                </section>
            </div>

            <div className={styles.overlay}>
                <a href="https://devoted-nurturing-production-6ca7.up.railway.app/" target="_blank" className={styles.btn}>
                    Launch System
                </a>
                <Link href="/" style={{
                    padding: '15px 30px', color: '#fff', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50px'
                }}>
                    Exit Demo
                </Link>
            </div>
        </main>
    );
}
