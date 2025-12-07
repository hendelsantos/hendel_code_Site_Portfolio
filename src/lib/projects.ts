export interface Project {
    id: string;
    title: string;
    description: {
        pt: string;
        en: string;
    };
    tags: string[];
    link: string;
    type: "frontend" | "fullstack" | "web3";
}

export const projects: Project[] = [
    {
        id: "hashdocs",
        title: "HashDocs",
        description: {
            pt: "Cartório Digital Descentralizado na blockchain Polygon. Registre e autentique documentos com prova imutável, custo acessível e validação global instantânea. Segurança criptográfica sem intermediários.",
            en: "Decentralized Digital Notary on the Polygon blockchain. Register and authenticate documents with immutable proof, affordable cost, and instant global validation. Cryptographic security without intermediaries.",
        },
        tags: ["Web3", "Polygon", "Next.js", "Solidity", "Smart Contracts"],
        link: "/projects/hashdocs",
        type: "web3",
    },
    {
        id: "qrcode-gen",
        title: "QR Code Gen",
        description: {
            pt: "Gerador de QR Codes modernos para WhatsApp, URLs e textos. Interface limpa, rápida e gratuita.",
            en: "Modern QR Code generator for WhatsApp, URLs, and text. Clean, fast, and free interface.",
        },
        tags: ["React", "Railway", "Utilities"],
        link: "/projects/qrcode-gen",
        type: "frontend",
    },
    {
        id: "pdv-saas",
        title: "PDV SaaS",
        description: {
            pt: "Sistema de Gestão Inteligente para Pontos de Venda (SaaS). Controle de estoque, vendas e relatórios em tempo real.",
            en: "Smart Point of Sale Management System (SaaS). Inventory control, sales, and real-time reporting.",
        },
        tags: ["React", "Node.js", "Railway", "SaaS"],
        link: "/projects/pdv-saas",
        type: "fullstack",
    },
];
