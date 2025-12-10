"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Interfaces.module.css";
import { useState, useRef, useEffect } from "react";

export default function Interfaces() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoRotating, setIsAutoRotating] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null);

    const creativeSites = [
        {
            id: "nexus",
            title: "NEXUS",
            desc: "Portfólio de Arte Contemporânea - Pintor de quadros com galeria interativa e design vibrante",
            link: "https://portfoliofrontendnexus-production.up.railway.app/",
            previewClass: styles.previewNexus,
            badges: ["Arte", "Galeria", "Interativo"],
            isExternal: true
        },
        {
            id: "euphoria",
            title: "EUPHORIA 2024",
            desc: "Festival de Música Eletrônica - Landing page imersiva com lineup, experiências e galeria de momentos épicos",
            link: "https://portfoliofrontedeuphoria-production.up.railway.app/",
            previewClass: styles.previewEuphoria,
            badges: ["Festival", "Música", "Eventos"],
            isExternal: true
        }
    ];

    // Detect mobile device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : creativeSites.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < creativeSites.length - 1 ? prev + 1 : 0));
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        // Pause auto-rotation when user manually selects
        setIsAutoRotating(false);
        if (autoRotateTimerRef.current) {
            clearInterval(autoRotateTimerRef.current);
        }
    };

    // Auto-rotation for mobile
    useEffect(() => {
        if (isMobile && isAutoRotating && creativeSites.length > 1) {
            autoRotateTimerRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev < creativeSites.length - 1 ? prev + 1 : 0));
            }, 4000); // Rotate every 4 seconds

            return () => {
                if (autoRotateTimerRef.current) {
                    clearInterval(autoRotateTimerRef.current);
                }
            };
        }
    }, [isMobile, isAutoRotating, creativeSites.length]);

    // Scroll to current index
    useEffect(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.scrollWidth / creativeSites.length;
            container.scrollTo({
                left: cardWidth * currentIndex,
                behavior: 'smooth'
            });
        }
    }, [currentIndex, creativeSites.length]);

    // Handle touch events to pause auto-rotation
    const handleTouchStart = () => {
        if (isMobile) {
            setIsAutoRotating(false);
            if (autoRotateTimerRef.current) {
                clearInterval(autoRotateTimerRef.current);
            }
        }
    };

    const handleTouchEnd = () => {
        if (isMobile) {
            // Resume auto-rotation after 10 seconds of inactivity
            setTimeout(() => {
                setIsAutoRotating(true);
            }, 10000);
        }
    };

    return (
        <section className={styles.interfaces}>
            <h2 className={styles.title}>{t("interfaces_title")}</h2>

            <div className={styles.carouselContainer}>
                {/* Navigation Arrows - Desktop only */}
                <button
                    className={`${styles.navArrow} ${styles.navArrowLeft}`}
                    onClick={handlePrev}
                    aria-label="Previous project"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div
                    className={styles.grid}
                    ref={scrollContainerRef}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {creativeSites.map((item, index) => (
                        <a
                            href={item.link}
                            key={item.id}
                            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
                            target={item.isExternal ? "_blank" : undefined}
                            rel={item.isExternal ? "noopener noreferrer" : undefined}
                        >
                            <div className={`${styles.preview} ${item.previewClass}`}>
                                <div className={styles.badges}>
                                    {item.badges.map((badge) => (
                                        <span key={badge} className={styles.badge}>
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.info}>
                                <h3 className={styles.cardTitle}>
                                    {item.title}
                                    <span className={styles.arrow}>→</span>
                                </h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <button
                    className={`${styles.navArrow} ${styles.navArrowRight}`}
                    onClick={handleNext}
                    aria-label="Next project"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Position Indicators */}
            <div className={styles.indicators}>
                {creativeSites.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
                {/* Auto-rotation progress bar */}
                <div className={`${styles.autoRotateProgress} ${isMobile && isAutoRotating ? styles.active : ''}`} />
            </div>
        </section>
    );
}
