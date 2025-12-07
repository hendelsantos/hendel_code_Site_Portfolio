export interface Project {
    id: string;
    title: string;
    description: {
        pt: string;
        en: string;
    };
    tags: string[];
    link: string;
    type: "frontend" | "fullstack";
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Neon Nexus",
        description: {
            pt: "Uma interface futurista com animações complexas em CSS e WebGL.",
            en: "A futuristic interface with complex CSS animations and WebGL.",
        },
        tags: ["React", "Three.js", "GSAP"],
        link: "#",
        type: "frontend",
    },
    {
        id: "2",
        title: "Shadow Bank",
        description: {
            pt: "Sistema bancário simulado com autenticação e transações seguras.",
            en: "Simulated banking system with authentication and secure transactions.",
        },
        tags: ["Next.js", "PostgreSQL", "Tailwind"],
        link: "#",
        type: "fullstack",
    },
    {
        id: "3",
        title: "Void Gallery",
        description: {
            pt: "Galeria de arte imersiva com carregamento procedural infinito.",
            en: "Immersive art gallery with infinite procedural loading.",
        },
        tags: ["TypeScript", "Canvas API", "SWR"],
        link: "#",
        type: "frontend",
    },
];
