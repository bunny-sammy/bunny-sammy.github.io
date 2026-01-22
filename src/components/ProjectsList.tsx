import { useTranslation } from "react-i18next";
import { useState } from "react";
import Modal from "./Modal";

import '../styles/components/ProjectsList.scss';
import ProjectCard from "./ProjectCard";
import Down from "../assets/svg/down.svg?react";
import { PROJECTS } from "../scripts/utils";
import { Project } from "../types/projects";

interface ProjectsModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    currentProjectId: string | undefined;
    setCurrentProjectId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function ProjectsModal ({isOpen, setIsOpen, currentProjectId, setCurrentProjectId}: ProjectsModalProps) {
    const prepareProjectsModal = (projectId: string | undefined = undefined) => {
        setCurrentProjectId(projectId);
    }
    
    return (
        <Modal id="modal" title="Navegar Projetos" isOpen={isOpen} setIsOpen={setIsOpen}>
            {currentProjectId}
            <ul className="projects-modal-list">
                {PROJECTS.map((project: Project) => (
                    <ProjectCard key={project.id} project={project} onClick={() => prepareProjectsModal(project.id)} />
                ))}
            </ul>
        </Modal>
    )
}

export default function ProjectsList() {
    const projectsPreview = PROJECTS.slice(0, 3);
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
                    Ver mais
                    <Down />
                </button>
            </ul>
        </>
    )
}