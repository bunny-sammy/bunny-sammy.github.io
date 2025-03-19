import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from 'react'

import '../styles/components/Projects.scss';
import SectionTitle from './resusable/SectionTitle';
import ProjectsIcon from '../assets/icons/projects_icon.svg?react';

export default function Projects () {
    // const { i18n, t } = useTranslation();
    const [data, setData] = useState<any>({});
    const [displayData, setDisplayData] = useState<any>([]);
    const [tags, setTags] = useState<any>([]);
    const [displayTags, setDisplayTags] = useState<any>([]);
    
    useEffect(() => {
        const jsonPath = `${import.meta.env.VITE_HOST}/projects.json`
        fetch(jsonPath)
            .then((response) => response.json())
            .then((json) => {
                    setData(json);
                    setTags(getUniqueTags(json));
                })
            .catch((error) => console.error("Error fetching data:", error));

        function getUniqueTags (data: any) {
            const allTags = data.projects.flatMap((project: any) => project.tags);
            const uniqueTagsArray = [...new Set(allTags)];

            return uniqueTagsArray;
        }
    }, [])

    return (
        <section data-section="projects" className="projects">
            <div className="title-line">
                <SectionTitle Icon={ProjectsIcon} title="Projetos"/>
                <span>Use as tags para filtrar meus projetos!</span>
            </div>
            
        </section>
    )
}