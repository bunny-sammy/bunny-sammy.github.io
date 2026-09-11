import { Project } from "../types/projects";
import { Lab } from "../types/labs";

export const LINKS: Record<string, string> = {
    'email': 'mailto:dsamuel.coelho@hotmail.com',
    'linkedin': 'https://www.linkedin.com/in/dsamcoelho/',
    'github': 'https://github.com/bunny-sammy',
} as const;

export const TOOLS: Record<string, string[]> = {
    'frontend': ["react", "blade", "expo", "ts", "js", "framer-motion", "jquery", "chartjs", "scss", "tailwind", "html", "css"],
    'backend': ["rust", "laravel", "next", "django"],
    'database': ["mongodb", "postgres", "mysql"],
    'tools': ["git", "docker", "figma", "affinity"],
    'essentials': ["responsive", "ux", "apis", "components", "prototyping", "vectors", "motion"]
} as const;

export const LABS: Lab[] = [
    {
        id: "js-raycaster",
        year: 2026,
        tags: ["html", "js", "responsive"],
        link: "https://bunny-sammy.github.io/js-raycaster"
    },
    {
        id: "virtual-gallery",
        year: 2025,
        tags: ["react", "framer-motion", "ts", "scss", "responsive"],
        link: "https://bunny-sammy.github.io/galeria-digital"
    }
]

export const PROJECTS: Project[] = [
    {
        id: "pokesort",
        year: 2026,
        tags: ["next", "react", "framer-motion", "scss", "mongodb", "ts", "vercel", "apis", "responsive", "components"],
        links: [
            {
                type: "github",
                url: "https://github.com/pokesort/pokesort"
            },
            {
                type: "view",
                url: "https://pokesort.com"
            }
        ],
        images: [
            "pokesort_1", "pokesort_2"
        ]
    },
    {
        id: "sonhario",
        year: 2025,
        tags: ["django", "expo", "postgres", "ts", "apis", "responsive", "components"],
        links: [
            {
                type: "github",
                url: "https://github.com/bunny-sammy/sonhario-api"
            },
            {
                type: "view",
                url: "https://bunny-sammy.github.io/sonhario-api"
            }
        ],
        images: [
            "sonhario_1", "sonhario_2"
        ]
    },
    {
        id: "tavern-talk",
        year: 2024,
        tags: ["next", "react", "scss", "mongodb", "js", "apis", "components", "vercel"],
        links: [
            {
                type: "github",
                url: "https://github.com/bunny-sammy/tavern-talk"
            },
            {
                type: "view",
                url: "https://tavern-talk.vercel.app"
            }
        ],
        images: [
            "taverntalk_1", "taverntalk_2"
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
        ],
        images: []
    },
    {
        id: "lotacao",
        year: 2025,
        tags: ["laravel", "blade", "tailwind", "css", "jquery", "js", "mysql"],
        links: [],
        images: [
            "lotacao_1"
        ]
    },
    {
        id: "portfolio",
        year: 2026,
        tags: ["react", "scss", "ts", "vectors", "responsive", "components", "motion"],
        links: [
            {
                type: "github",
                url: "https://github.com/bunny-sammy/bunny-sammy.github.io"
            },
            {
                type: "view",
                url: "https://bunny-sammy.github.io"
            }
        ],
        images: [
            "portfolio_1"
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
        ],
        images: [
            "safety-net_1"
        ]
    },    
] as const;