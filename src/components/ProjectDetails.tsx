import { useTranslation } from "react-i18next";

import '../styles/components/ProjectDetails.scss';
import { Link, Project } from "../types/projects";

import Back from "../assets/svg/back.svg?react";
import Github from "../assets/svg/github.svg?react";
import View from "../assets/svg/view.svg?react";

function LinkIcon({type}: {type: "github" | "view"}) {
    const {t} = useTranslation();

    switch (type) {
        case "github":
            return <>
                <Github />
                <span>{t(`projects.modal.github`)}</span>
            </>
        case "view":
            return <>
                <View />
                <span>{t(`projects.modal.view`)}</span>
            </>
    }
}

interface ProjectDetailsProps {
    project: Project | null;
    goBack: () => void;
}

export default function ProjectDetails ({project, goBack}: ProjectDetailsProps) {
    const {t} = useTranslation();

    const description = project != null ? t(`projects.data.${project.id}.description`) : "";
    const body = project != null ? t(`projects.data.${project.id}.body`) : "";

    return (
        <div className={`project-details ${project ? "active" : ""}`}>
            {project != null ?
                <div className="project-page">
                    <h3>
                        <button className="hover-effect" onClick={goBack}>
                            <Back />
                        </button>
                        {t(`projects.data.${project.id}.title`)}
                    </h3>
                    <ul className="project-tags">
                        <li key="year">{project.year}</li>
                        {project.tags.map((tag: string) => (
                            <li key={tag}>{t(`tools.tags.${tag}`)}</li>
                        ))}
                    </ul>
                    <div className="project-content">
                        <div className="project-body">
                            {description && <p>
                                {description}
                            </p>}
                            {body && <p>
                                {body}
                            </p>}
                            {project.links.map((link: Link) => (
                                <a target="_blank" className="hover-effect accent" href={link.url}>
                                    <LinkIcon type={link.type} />
                                </a>
                            ))}
                        </div>
                        <ul className="project-images">
                            <img src={`img/thumbs/${project.id}.png`} />
                            {project.images?.map((image: string) => (
                                <img src={`img/projects/${image}.png`} />
                            ))}
                        </ul>
                    </div>
                </div>
            : <></> }
        </div>
    )
}