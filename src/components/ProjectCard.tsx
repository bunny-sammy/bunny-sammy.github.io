import { useTranslation } from "react-i18next";

import '../styles/components/ProjectCard.scss';
import Github from "../assets/svg/github.svg?react";
import View from "../assets/svg/view.svg?react";
import { Link, Project } from "../types/projects";
import { useEffect, useState } from "react";
import fallback from '../assets/img/fallback.png';

interface ProjectCardProps {
    project: Project;
    showButtons?: boolean;
    onClick: (projectId?: string | undefined) => void;
}

function LinkIcon({type}: {type: "github" | "view"}) {
    switch (type) {
        case "github":
            return <Github />
        case "view":
            return <View />
    }
}

export default function ProjectCard({ project, showButtons=true, onClick }: ProjectCardProps) {
    const {t} = useTranslation();
    const url = `${import.meta.env.VITE_HOST}/img/projects/${project.id}.png`
    const [loadedImage, setLoadedImage] = useState<string | null>(null);

    useEffect(() => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            setLoadedImage(url);
        };
    }, [])

    return (
        <li className="project-card-container">
            <div className="project-card hover-effect" onClick={() => onClick(project.id)}>
                <img src={loadedImage || fallback} />
                <div>
                    <hgroup>
                        <h3>
                            {t(`projects.data.${project.id}.title`)}
                            {showButtons && <div className="buttons">
                                {project.links.map((link: Link) => (
                                    <a key={link.type} target="_blank" className="hover-effect accent"
                                        href={link.url} onClick={(e) => e.stopPropagation()}>
                                        <LinkIcon type={link.type} />
                                    </a>
                                ))}
                            </div>}
                        </h3>
                        <ul className="project-tags">
                            <li key="year">{project.year}</li>
                            {project.tags.map((tag: string) => (
                                <li key={tag}>{t(`tools.tags.${tag}`)}</li>
                            ))}
                        </ul>
                    </hgroup>
                    <p>
                        {t(`projects.data.${project.id}.description`)}
                    </p>
                </div>
            </div>
        </li>
    )
}