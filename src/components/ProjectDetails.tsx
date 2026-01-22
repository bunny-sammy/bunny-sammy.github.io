import { useTranslation } from "react-i18next";

import '../styles/components/ProjectDetails.scss';
import { Project } from "../types/projects";

interface ProjectDetailsProps {
    project: Project | null;
    goBack: () => void;
}

export default function ProjectDetails ({project, goBack}: ProjectDetailsProps) {
    return (
        <div className={`project-details ${project ? "active" : ""}`}>
            {project ?
                <>
                <button className="hover-effect" onClick={goBack}>
                    Voltar
                </button>
                <p>
                    {project.id}
                </p>
                </>
            : <></> }
        </div>
    )
}