"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Track {
    id: string;
    title: string;
    artist: string;
    embedId: string; // The Spotify ID or URI part
    bpm: number; // For pulse speed (60/bpm seconds)
    theme: string; // Hex color for glow
}

interface MusicContextType {
    currentTrackIndex: number;
    tracks: Track[];
    playTrack: (index: number) => void;
    nextTrack: () => void;
    previousTrack: () => void;
    currentTrack: Track;
    isVisualizerActive: boolean;
    toggleVisualizer: () => void;
}

const tracks: Track[] = [
    {
        id: "chaos",
        title: "Soundtrack for the Blind",
        artist: "Swans (Chaos Theme)",
        embedId: "album/7ehAB57WfQmu4O2W82Fjq8",
        bpm: 30, // Slow, heavy
        theme: "#ff0000" // Red
    },
    {
        id: "requested",
        title: "Selected Ambient",
        artist: "User Request",
        embedId: "track/4HJstaowKzntYfQdG6agTG",
        bpm: 60, // Calm, steady
        theme: "#00bfff" // Deep Sky Blue (Zen)
    }
];

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isVisualizerActive, setIsVisualizerActive] = useState(true);

    const toggleVisualizer = () => setIsVisualizerActive(prev => !prev);

    const playTrack = (index: number) => {
        if (index >= 0 && index < tracks.length) {
            setCurrentTrackIndex(index);
        }
    };

    const nextTrack = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    };

    const previousTrack = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    };

    return (
        <MusicContext.Provider value={{
            currentTrackIndex,
            tracks,
            playTrack,
            nextTrack,
            previousTrack,
            currentTrack: tracks[currentTrackIndex],
            isVisualizerActive,
            toggleVisualizer
        }}>
            {children}
        </MusicContext.Provider>
    );
}

export function useMusic() {
    const context = useContext(MusicContext);
    if (context === undefined) {
        throw new Error("useMusic must be used within a MusicProvider");
    }
    return context;
}
