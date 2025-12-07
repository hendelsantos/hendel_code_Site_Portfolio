"use client";

import { useState } from "react";
import styles from "./SpotifyWidget.module.css";
import { useMusic } from "@/context/MusicContext";

export default function SpotifyWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const { currentTrack, nextTrack, previousTrack } = useMusic();

    // Use current track from context
    const embedUrl = `https://open.spotify.com/embed/${currentTrack.embedId}?utm_source=generator&theme=0`;

    return (
        <div className={styles.container}>
            <button
                className={styles.toggleBtn}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Music Player"
            >
                {isOpen ? "✕" : "♫"}
            </button>
            <div className={`${styles.playerWrapper} ${isOpen ? styles.open : ''}`}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '40px', background: '#000',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px',
                    zIndex: 20, borderBottom: '1px solid #333'
                }}>
                    <button onClick={previousTrack} style={{
                        background: 'transparent', border: '1px solid #444', color: '#888', fontSize: '10px',
                        cursor: 'pointer', padding: '4px 8px', borderRadius: '4px', transition: 'all 0.2s'
                    }} className="hover:text-white hover:border-white">&lt; PREV</button>

                    <span style={{ color: '#fff', fontSize: '10px', maxWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {currentTrack.title}
                    </span>

                    <button onClick={nextTrack} style={{
                        background: 'transparent', border: '1px solid #444', color: '#888', fontSize: '10px',
                        cursor: 'pointer', padding: '4px 8px', borderRadius: '4px', transition: 'all 0.2s'
                    }} className="hover:text-white hover:border-white">NEXT &gt;</button>
                </div>
                <div className={styles.loading}>Loading Audio...</div>
                <iframe
                    key={currentTrack.id} // Force reload on track change
                    style={{ borderRadius: "12px", position: "relative", zIndex: 10, marginTop: '40px', height: 'calc(100% - 40px)' }}
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>
        </div>
    );
}
