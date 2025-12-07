"use client";

import { useState } from "react";
import styles from "./SpotifyWidget.module.css";

export default function SpotifyWidget() {
    const [isOpen, setIsOpen] = useState(false);

    // Album provided: https://open.spotify.com/album/7ehAB57WfQmu4O2W82Fjq8
    // Embed URL format
    const embedUrl = "https://open.spotify.com/embed/album/7ehAB57WfQmu4O2W82Fjq8?utm_source=generator&theme=0";

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
                <div className={styles.loading}>Loading Audio...</div>
                <iframe
                    style={{ borderRadius: "12px", position: "relative", zIndex: 10 }}
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
