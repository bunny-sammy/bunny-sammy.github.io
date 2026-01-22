import { Project } from "../types/projects";

export const LINKS: Record<string, string> = {
    'resume': 'https://drive.google.com/open?id=1T7dSibxiF5o7TxIXOLjA0ulnf_9WyN8Q&usp=drive_fs',
    'email': 'mailto:dsamuel.coelho@hotmail.com',
    'linkedin': 'https://www.linkedin.com/in/dsamcoelho/',
    'github': 'https://github.com/bunny-sammy',
    'instagram': 'https://www.instagram.com/bunnysammy_'
} as const;

export const TOOLS: Record<string, string[]> = {
    'frontend': ["react", "blade", "expo", "ts", "js", "jquery", "chartjs", "scss", "tailwind", "html", "css"],
    'backend': ["laravel", "next", "django"],
    'database': ["mongodb", "postgres"],
    'tools': ["git", "vercel", "figma", "affinity"],
    'essentials': ["responsive", "components", "prototyping", "vectors", "motion"]
} as const;

export const PROJECTS: Project[] = [
    {
        id: "pokesort",
        year: 2026,
        tags: ["next", "react", "scss", "mongodb", "ts", "vercel", "responsive", "components"],
        links: [
            {
                type: "github",
                url: "https://github.com/pokesort/pokesort"
            },
            {
                type: "view",
                url: "https://pokesort.com"
            }
        ]
    },
    {
        id: "sonhario",
        year: 2025,
        tags: ["django", "expo", "postgres", "ts", "responsive", "components"],
        links: [
            {
                type: "github",
                url: "https://github.com/bunny-sammy/sonhario-api"
            },
            {
                type: "view",
                url: "https://bunny-sammy.github.io/sonhario-api"
            }
        ]
    },
    {
        id: "selecao",
        year: 2024,
        tags: ["laravel", "blade", "tailwind", "css", "jquery", "js", "mysql", "responsive"],
        links: [
            {
                type: "view",
                url: "https://selecao.educacao.al.gov.br/"
            }
        ]
    },
    {
        id: "lotacao",
        year: 2025,
        tags: ["laravel", "blade", "tailwind", "css", "jquery", "js", "mysql"],
        links: []
    },
    {
        id: "portfolio",
        year: 2026,
        tags: ["react", "scss", "ts", "responsive", "components", "vectors", "motion"],
        links: [
            {
                type: "github",
                url: "https://github.com/omarcosss/safety-net"
            },
            {
                type: "view",
                url: "https://projetosafetynet.vercel.app"
            }
        ]
    },
    {
        id: "safety-net",
        year: 2025,
        tags: ["react", "scss", "tailwind", "ts", "vercel", "responsive"],
        links: [
            {
                type: "github",
                url: "https://github.com/omarcosss/safety-net"
            },
            {
                type: "view",
                url: "https://projetosafetynet.vercel.app"
            }
        ]
    },
    {
        id: "tavern-talk",
        year: 2024,
        tags: ["next", "react", "scss", "mongodb", "js", "vercel", "components"],
        links: [
            {
                type: "github",
                url: "https://github.com/bunny-sammy/tavern-talk"
            },
            {
                type: "view",
                url: "https://tavern-talk.vercel.app"
            }
        ]
    },
] as const;