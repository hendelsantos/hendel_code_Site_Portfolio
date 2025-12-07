import styles from "./mobile.module.css";

export default function MobilePage() {
    return (
        <main className={styles.container}>
            <div className={styles.mobileFrame}>
                {/* Status Bar */}
                <div className={styles.statusBar}>
                    <span>9:41</span>
                    <div style={{ display: 'flex', gap: '5px' }}>
                        <span>5G</span>
                        <span>100%</span>
                    </div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    <header className={styles.header}>
                        <div className={styles.greeting}>Good Evening,</div>
                        <div className={styles.username}>Hendel Santos</div>
                    </header>

                    {/* Credit Card */}
                    <div className={styles.card}>
                        <div className={styles.cardChip}></div>
                        <div className={styles.cardBalanceLabel}>Total Balance</div>
                        <div className={styles.cardBalance}>$84,290.42</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                            <span>**** 4545</span>
                            <span>12/28</span>
                        </div>
                    </div>

                    {/* Transactions */}
                    <div className={styles.sectionTitle}>
                        <span>Recent Activity</span>
                        <span style={{ color: '#00ffcc', fontSize: '14px' }}>See All</span>
                    </div>

                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            <div className={styles.icon} style={{ background: 'rgba(255, 100, 100, 0.1)', color: '#ff6464' }}>🛍️</div>
                            <div className={styles.itemInfo}>
                                <span className={styles.itemTitle}>Apple Store</span>
                                <span className={styles.itemDesc}>Electronics</span>
                            </div>
                            <span className={styles.itemValue} style={{ color: '#fff' }}>- $299.00</span>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.icon} style={{ background: 'rgba(0, 255, 204, 0.1)', color: '#00ffcc' }}>💎</div>
                            <div className={styles.itemInfo}>
                                <span className={styles.itemTitle}>Freelance Project</span>
                                <span className={styles.itemDesc}>Income</span>
                            </div>
                            <span className={styles.itemValue}>+ $4,500.00</span>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.icon} style={{ background: 'rgba(100, 100, 255, 0.1)', color: '#6464ff' }}>🔋</div>
                            <div className={styles.itemInfo}>
                                <span className={styles.itemTitle}>Electric Charge</span>
                                <span className={styles.itemDesc}>Utilities</span>
                            </div>
                            <span className={styles.itemValue} style={{ color: '#fff' }}>- $45.20</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Menu */}
                <div className={styles.menuBar}>
                    <div className={`${styles.menuItem} ${styles.active}`}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" /></svg>
                        <span>Home</span>
                    </div>
                    <div className={styles.menuItem}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /></svg>
                        <span>Stats</span>
                    </div>
                    <div className={styles.menuItem}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" /></svg>
                        <span>Cards</span>
                    </div>
                    <div className={styles.menuItem}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                        <span>Profile</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
