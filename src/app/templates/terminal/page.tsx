"use client";

import styles from "./terminal.module.css";
import { useState, useRef, useEffect } from "react";

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

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        let response = "";
        switch (cmd) {
            case 'help':
                response = "Available commands: about, skills, contact, clear, exit";
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
