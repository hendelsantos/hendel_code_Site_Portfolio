"use client";

import styles from "./terminal.module.css";
import { useState, useRef, useEffect } from "react";
import { useMusic } from "@/context/MusicContext";

export default function TerminalPage() {
    const [history, setHistory] = useState<string[]>([
        "Initializing HENDEL_OS v4.0...",
        "Loading kernel modules... [OK]",
        "Mounting file system... [OK]",
        "Welcome user. Type 'help' for available commands."
    ]);
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const { nextTrack, playTrack, currentTrack, tracks, isVisualizerActive, toggleVisualizer } = useMusic();

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        // Handle music args
        const args = cmd.split(" ");
        const mainCmd = args[0];
        const subCmd = args[1];

        let response = "";
        switch (mainCmd) {
            case 'help':
                response = "Available commands: music, visualizer, about, skills, contact, clear, exit";
                break;
            case 'music':
                if (!subCmd || subCmd === 'status') {
                    response = `Now Playing: [${currentTrack.title}] by ${currentTrack.artist}`;
                } else if (subCmd === 'next') {
                    nextTrack();
                    response = "Swapping audio stream... [OK]";
                } else if (subCmd === 'list') {
                    response = "Tracks: " + tracks.map((t, i) => `[${i}] ${t.title}`).join(", ");
                } else if (parseInt(subCmd) >= 0) {
                    playTrack(parseInt(subCmd));
                    response = `Loading track [${subCmd}]...`;
                } else {
                    response = "Music usage: music [next|list|status|0-9]";
                }
                break;
            case 'visualizer':
                if (subCmd === 'on') {
                    if (!isVisualizerActive) toggleVisualizer();
                    response = "Audio Reactive HUD: ENABLED";
                } else if (subCmd === 'off') {
                    if (isVisualizerActive) toggleVisualizer();
                    response = "Audio Reactive HUD: DISABLED";
                } else {
                    response = "Usage: visualizer [on|off]";
                }
                break;
            case 'about':
                response = "Hendel Santos. Frontend Creator. Specialist in Chaos & Logic.";
                break;
            case 'skills':
                response = "React, Next.js, Node.js, Web3, UI/UX Design.";
                break;
            case 'contact':
                response = "Send signals to: hendel@example.com (or use the main signal form).";
                break;
            case 'clear':
                setHistory([]);
                setInput("");
                return;
            case 'exit':
                window.location.href = "/";
                return;
            default:
                response = `Command not found: ${cmd}. Type 'help' for assistance.`;
        }

        setHistory([...history, `root@hendel:~$ ${input}`, response]);
        setInput("");
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    return (
        <main className={styles.terminal} onClick={() => inputRef.current?.focus()}>
            <div className={styles.crtLine}></div>

            <header className={styles.header}>
                <div className={styles.asciiArt}>
                    {`  _    _ ______ _   _ _____  ______ _      
 | |  | |  ____| \\ | |  __ \\|  ____| |     
 | |__| | |__  |  \\| | |  | | |__  | |     
 |  __  |  __| | . \` | |  | |  __| | |     
 | |  | | |____| |\\  | |__| | |____| |____ 
 |_|  |_|______|_| \\_|_____/|______|______|`}
                </div>
                <div>SYSTEM ONLINE | UNPROTECTED ACCESS</div>
            </header>

            <div className={styles.output}>
                {history.map((line, i) => (
                    <div key={i} className={styles.line}>{line}</div>
                ))}
                <div ref={bottomRef}></div>
            </div>

            <form className={styles.commandLine} onSubmit={handleCommand}>
                <span className={styles.prompt}>root@hendel:~$</span>
                <input
                    ref={inputRef}
                    type="text"
                    className={styles.input}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    autoFocus
                />
                <span className={styles.cursor}></span>
            </form>
        </main>
    );
}
