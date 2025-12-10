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
        projects: "Projetos Full Stack",
        contact: "Contato",
        hero_title: "Criatividade no Caos",
        hero_subtitle: "Desenvolvendo experiências web únicas com precisão e alma.",
        services: "Habilidades",
        service_frontend_title: "Desenvolvimento Frontend",
        service_frontend_desc: "Criação de interfaces responsivas, interativas e performáticas com React & Next.js modernos.",
        service_fullstack_title: "Soluções Fullstack",
        service_fullstack_desc: "Desenvolvimento de aplicações ponta a ponta com APIs robustas e integração de banco de dados.",
        service_ui_title: "Design UI/UX",
        service_ui_desc: "Design de experiências digitais intuitivas e esteticamente agradáveis que cativam usuários.",
        contact_name: "Nome",
        contact_email: "Email",
        contact_subject: "Assunto",
        contact_budget: "Orçamento (Opcional)",
        contact_message: "Mensagem",
        contact_submit: "Enviar Transmissão",
        subject_project: "Novo Projeto",
        subject_job: "Oportunidade de Trabalho",
        subject_collab: "Colaboração",
        subject_other: "Outro",
        interfaces_title: "Arte em Site",
        interface_comic_title: "Gibi Mudo",
        interface_comic_desc: "Narrativa visual sem palavras. Pura imersão.",
        interface_mobile_title: "Neon Mobile",
        interface_mobile_desc: "Layout de app focado na experiência mobile.",
        interface_gallery_title: "Vista Gallery",
        interface_gallery_desc: "Experiência de fotografia imersiva.",
        interface_terminal_title: "Retro Terminal",
        interface_terminal_desc: "Interface CLI para desenvolvedores.",
        interface_corporate_title: "Zen Corporate",
        interface_corporate_desc: "Landing page empresarial minimalista.",
    },
    en: {
        greeting: "Hello, I am",
        role: "Frontend Creator",
        about: "About",
        projects: "Full Stack Projects",
        contact: "Contact",
        hero_title: "Creativity in Chaos",
        hero_subtitle: "Crafting unique web experiences with precision and soul.",
        services: "Skills",
        service_frontend_title: "Frontend Development",
        service_frontend_desc: "Building responsive, interactive, and performant user interfaces using modern React & Next.js.",
        service_fullstack_title: "Fullstack Solutions",
        service_fullstack_desc: "End-to-end application development with robust APIs and seamless database integration.",
        service_ui_title: "UI/UX Design",
        service_ui_desc: "Designing intuitive and aesthetically pleasing digital experiences that captivate users.",
        contact_name: "Name",
        contact_email: "Email",
        contact_subject: "Subject",
        contact_budget: "Budget (Optional)",
        contact_message: "Message",
        contact_submit: "Send Transmission",
        subject_project: "New Project",
        subject_job: "Job Opportunity",
        subject_collab: "Collaboration",
        subject_other: "Other",
        interfaces_title: "Site Art",
        interface_comic_title: "Silent Comic",
        interface_comic_desc: "Visual storytelling without words. Pure narrative.",
        interface_mobile_title: "Neon Mobile",
        interface_mobile_desc: "App-centric layout designed for thumbs.",
        interface_gallery_title: "Vista Gallery",
        interface_gallery_desc: "Immersive photography experience.",
        interface_terminal_title: "Retro Terminal",
        interface_terminal_desc: "Developer-first CLI interface.",
        interface_corporate_title: "Zen Corporate",
        interface_corporate_desc: "Minimalist business landing page.",
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
