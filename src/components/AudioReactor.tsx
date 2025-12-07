"use client";

import { useEffect } from "react";
import { useMusic } from "@/context/MusicContext";

export default function AudioReactor() {
    const { currentTrack, isVisualizerActive } = useMusic();

    useEffect(() => {
        const root = document.documentElement;

        if (!isVisualizerActive) {
            root.style.setProperty('--pulse-speed', '0s');
            root.style.setProperty('--pulse-color', 'transparent');
            return;
        }

        // Calculate animation duration based on BPM (60 / bpm)
        // Example: 60 BPM = 1 beat per second.
        const duration = 60 / currentTrack.bpm;

        root.style.setProperty('--pulse-speed', `${duration}s`);
        root.style.setProperty('--pulse-color', currentTrack.theme);

    }, [currentTrack, isVisualizerActive]);

    return null; // This component handles side-effects only (CSS variables)
}
