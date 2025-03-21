import '../../styles/components/ProjectCard.scss';

interface ProjectCardProps {
    project: any
}

export default function ProjectCard ({project}: ProjectCardProps) {

    return (
        <li className="project-card">
            {project.name}
        </li>
    )
}