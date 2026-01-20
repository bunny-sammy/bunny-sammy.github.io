import { useTranslation } from "react-i18next";

import '../styles/components/ProjectCard.scss';
import Github from "../assets/svg/github.svg?react";
import View from "../assets/svg/view.svg?react";
import { Link, Project } from "../types/projects";

interface ProjectCardProps {
    project: Project
}

function LinkIcon({type}: {type: "github" | "view"}) {
    switch (type) {
        case "github":
            return <Github />
        case "view":
            return <View />
    }
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const {t} = useTranslation();

    return (
        <li className="project-card hover-effect">
            <img src="img/projects/pokesort.png" />
            <div>
                <h3>
                    {t(`projects.data.${project.id}.title`)}
                    <div className="buttons">
                        {project.links.map((link: Link) => (
                            <a target="_blank" className="hover-effect" href={link.url}>
                                <LinkIcon type={link.type} />
                            </a>
                        ))}
                    </div>
                </h3>
                <ul className="project-tags">
                    {project.tags.map((tag: string) => (
                        <li>{t(`tools.tags.${tag}`)}</li>
                    ))}
                </ul>
                <p>
                    {t(`projects.data.${project.id}.description`)}
                </p>
            </div>
        </li>
    )
}