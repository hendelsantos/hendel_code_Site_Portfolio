import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CommandCenter from "@/components/CommandCenter";
import LanguageSwitch from "@/components/LanguageSwitch";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <LanguageSwitch />
      <Hero />
      <About />
      <CommandCenter />
      <Projects />
      <Contact />
    </main>
  );
}
