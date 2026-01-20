import { useTranslation } from "react-i18next";

import '../styles/components/ProjectsList.scss';
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
    return (
        <ul className="projects-list">
            <ProjectCard
                project={{
                    id: "pokesort",
                    tags: ["next", "mongodb", "scss"],
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
                }} />
            <button>
                Ver mais
            </button>
        </ul>
    )
}