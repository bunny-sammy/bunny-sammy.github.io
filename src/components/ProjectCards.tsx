import { useTranslation } from 'react-i18next';
import { memo, useEffect, useRef, useState } from 'react';
import '../styles/components/ProjectCards.scss';

import coverImage from '../assets/images/projects/tavern-talk.png';
import AccessIcon from '../assets/icons/projects_access.svg?react';
import CodeIcon from '../assets/icons/projects_code.svg?react';
import PlayIcon from '../assets/icons/projects_play.svg?react';
import ReadIcon from '../assets/icons/projects_read.svg?react';

interface ProjectCardProps {
    data: any[],
    tags: any[],
    displayData: any[]
}

interface ActionIconProps {
    action: string
}

export default memo(function ProjectCards ({data, tags, displayData}: ProjectCardProps) {
    const { i18n, t } = useTranslation();

    const [cardHeights, setCardHeights] = useState<number[]>([20,50,40,80,90,50]);
    const containerRef = useRef<HTMLUListElement>(null);

    const ActionIcon = ({ action }: ActionIconProps) => {
        switch (action) {
            case "code":
                return <CodeIcon/>
            case "play":
                return <PlayIcon/>
            case "read-pt":
            case "read-en":
                return <ReadIcon/>
            case "access":
            default:
                return <AccessIcon/>;
        }
    };

    useEffect(() => {
        const updateSpans = () => {
            if (!containerRef.current) return;

            const items = Array.from(containerRef.current.children) as HTMLElement[];
            const newHeights = items.map((item) => {
                item.classList.remove("resized");
                const contentHeight = Math.ceil(item.scrollHeight / 10) + 1;
                item.classList.add("resized");

                return contentHeight;
            });

            setCardHeights(newHeights);
        };

        updateSpans();
        window.addEventListener("resize", updateSpans); // Update on resize

        return () => window.removeEventListener("resize", updateSpans);
    }, [data]);

    return (
        <ul className="projects-container" ref={containerRef}>
            {data && data.map((project: any, i: number) => (
                <li key={project.key} style={{"--card-height": cardHeights[i] ?? 50} as React.CSSProperties}
                className={`project-card ${!displayData.includes(project) ? "hidden" : ""}`}>
                    <h2>{project.name}</h2>
                    <ul className="card-tags">
                        {project.tags && project.tags.map((tag: string, j: number) => (
                            <li key={j} className={`tag ${tags.includes(tag) ? "selected" : ""}`}>
                                {t(`tags.${tag}`)}
                            </li>
                        ))}
                    </ul>
                    <img src={`${import.meta.env.VITE_HOST}/projects/${project.key}.png`}/>
                    <p>{project.description}</p>
                    <div className="actions-line">
                        {project.actions && Object.entries(project.actions).map(([action, url], j: number) => (
                            <a key={j} href={url} target="_blank" rel="noopener noreferrer">
                                <ActionIcon action={action}/>
                                {t(`actions.${action}`)}
                            </a>
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    )
})