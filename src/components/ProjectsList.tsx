import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";
import Modal from "./Modal";

import '../styles/components/ProjectsList.scss';
import ProjectCard from "./ProjectCard";
import Down from "../assets/svg/down.svg?react";
import { PROJECTS } from "../scripts/utils";
import { Project } from "../types/projects";
import ProjectDetails from "./ProjectDetails";

interface ProjectsModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    currentProjectId: string | undefined;
    setCurrentProjectId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function ProjectsModal ({isOpen, setIsOpen, currentProjectId, setCurrentProjectId}: ProjectsModalProps) {
    const {t} = useTranslation();
    
    const projectsOrdered = [...PROJECTS]
        .sort((a: Project, b: Project) => t(`projects.data.${a.id}.title`).localeCompare(t(`projects.data.${b.id}.title`)))
        .sort((a: Project, b: Project) => b.year - a.year);
    
    const prepareProjectsModal = (projectId: string | undefined = undefined) => {
        setCurrentProjectId(projectId);
    }

    const goBack = () => {
        setCurrentProjectId(undefined);
    }

    const currentProject: Project | null = useMemo(() => {
        if (currentProjectId == undefined) return null;

        const filteredProjects = [...PROJECTS].filter((p: Project) => p.id == currentProjectId);
        return filteredProjects[0];
    }, [currentProjectId, PROJECTS])
    
    return (
        <Modal id="modal" title={t(`projects.modal.header`)} isOpen={isOpen} setIsOpen={setIsOpen}>
            <ProjectDetails
                project={currentProject}
                goBack={goBack}
            />
            <ul className={`projects-modal-list ${!currentProjectId ? "active" : ""}`}>
                {projectsOrdered.map((project: Project) => (
                    <ProjectCard key={project.id} project={project} onClick={() => prepareProjectsModal(project.id)} />
                ))}
            </ul>
        </Modal>
    )
}

export default function ProjectsList() {
    const {t} = useTranslation();
    
    const projectsPreview = [...PROJECTS].slice(0, 3);
    const [openProjectsModal, setOpenProjectsModal] = useState<boolean>(false);
    const [currentProjectId, setCurrentProjectId] = useState<string>();

    const prepareProjectsModal = (projectId: string | undefined = undefined) => {
        setCurrentProjectId(projectId);
        setOpenProjectsModal(true);
    }

    return (
        <>
            <ProjectsModal
                isOpen={openProjectsModal}
                setIsOpen={setOpenProjectsModal}
                currentProjectId={currentProjectId}
                setCurrentProjectId={setCurrentProjectId}
            />
            <ul className="projects-list">
                {projectsPreview.map((project: Project) => (
                    <ProjectCard key={project.id} project={project} onClick={prepareProjectsModal} />
                ))}
                <button className="more-button accent hover-effect" onClick={() => prepareProjectsModal()}>
                    {t(`about.more`)}
                    <Down />
                </button>
            </ul>
        </>
    )
}