"use client";

import styles from "./TerminalGateway.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TerminalGateway() {
    const pathname = usePathname();

    // Don't show if already in the terminal to avoid redundancy/clutter
    if (pathname === '/templates/terminal') return null;

    return (
        <Link href="/templates/terminal" className={styles.toggleBtn} aria-label="Open Terminal">
            &gt;_
        </Link>
    );
}
