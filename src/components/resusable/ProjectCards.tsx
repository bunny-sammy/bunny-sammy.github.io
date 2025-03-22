import { useEffect, useRef, useState } from 'react';
import '../../styles/components/ProjectCards.scss';

interface ProjectCardProps {
    data: any[]
}

export default function ProjectCards ({data}: ProjectCardProps) {

    const [cardHeights, setCardHeights] = useState<number[]>([20,50,40,80,90,50]);
    const containerRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const updateSpans = () => {
            if (!containerRef.current) return;

            const items = Array.from(containerRef.current.children) as HTMLElement[];
            const newHeights = items.map((item) => {
                item.classList.remove("resized");
                const contentHeight = Math.ceil(item.scrollHeight / 10);
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
                <li key={project.key} className="project-card resized" style={{"--card-height": cardHeights[i] ?? 50} as React.CSSProperties}>
                    {project.name}
                    <p>{project.description}</p>
                </li>
            ))}
        </ul>
    )
}