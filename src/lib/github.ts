// src/lib/github.ts

export interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    topics: string[];
}

const MOCK_REPOS: GitHubRepo[] = [
    {
        id: 1,
        name: "hendel_code_Site_Portfolio",
        description: "Creative Frontend & Fullstack Portfolio.",
        html_url: "https://github.com/hendelsantos/hendel_code_Site_Portfolio",
        language: "TypeScript",
        stargazers_count: 5,
        topics: ["portfolio", "nextjs", "creative"],
    },
    {
        id: 2,
        name: "hashdocs-contract",
        description: "Smart Contracts for HashDocs on Polygon.",
        html_url: "#",
        language: "Solidity",
        stargazers_count: 12,
        topics: ["web3", "blockchain", "polygon"],
    },
    {
        id: 3,
        name: "pdv-saas",
        description: "Smart Point of Sale Management System (SaaS).",
        html_url: "#",
        language: "TypeScript",
        stargazers_count: 8,
        topics: ["react", "nodejs", "railway", "saas"],
    },
    {
        id: 4,
        name: "qrcode-generator",
        description: "Modern QR Code generator for WhatsApp, URLs, and text.",
        html_url: "#",
        language: "JavaScript",
        stargazers_count: 3,
        topics: ["react", "frontend", "railway"],
    },
    {
        id: 5,
        name: "python-automation",
        description: "Scripts for data automation.",
        html_url: "#",
        language: "Python",
        stargazers_count: 7,
        topics: ["python", "automation"],
    },
];

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);

        if (!res.ok) {
            console.warn("GitHub API rate limit or error, using mock data.");
            return MOCK_REPOS;
        }

        const data = await res.json();
        return data.map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || "No description provided.",
            html_url: repo.html_url,
            language: repo.language || "Unknown",
            stargazers_count: repo.stargazers_count,
            topics: repo.topics || [],
        }));
    } catch (error) {
        console.error("Failed to fetch repos", error);
        return MOCK_REPOS;
    }
}
