"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    pt: {
        greeting: "Olá, eu sou",
        role: "Frontend Creator",
        about: "Sobre",
        projects: "Projetos",
        contact: "Contato",
        hero_title: "Criatividade no Caos",
        hero_subtitle: "Desenvolvendo experiências web únicas com precisão e alma.",
    },
    en: {
        greeting: "Hello, I am",
        role: "Frontend Creator",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        hero_title: "Creativity in Chaos",
        hero_subtitle: "Crafting unique web experiences with precision and soul.",
    },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("pt");

    // Load language from local storage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem("hendel-lang") as Language;
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("hendel-lang", lang);
    };

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
