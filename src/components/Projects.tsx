import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from 'react'

import '../styles/components/Projects.scss';
import SectionTitle from './resusable/SectionTitle';
import ProjectsIcon from '../assets/icons/projects_icon.svg?react';

export default function Projects () {
    const { i18n, t } = useTranslation();
    const [data, setData] = useState<any>({});
    const [displayData, setDisplayData] = useState<any>([]);
    const [categories, setCategories] = useState<string[]>(["apps", "games", "comics"]);
    const [displayCategory, setDisplayCategory] = useState<string>("apps");
    const [tags, setTags] = useState<string[]>([]);
    const [displayTags, setDisplayTags] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagChange = (tag: string) => {
        setSelectedTags((prev: any) =>
            prev.includes(tag) ? prev.filter((t: string) => t !== tag) : [...prev, tag]
        );
    };
    
    useEffect(() => {
        const jsonPath = `${import.meta.env.VITE_HOST}/projects.json`
        fetch(jsonPath)
            .then((response) => response.json())
            .then((json) => {
                    setData(json);
                    setCategories(json.categories);
                    setTags(getUniqueTags(json));
                })
            .catch((error) => console.error("Error fetching data:", error));

        function getUniqueTags (data: any): string[] {
            const allTags = data.projects.flatMap((project: any) => project.tags);
            const uniqueTagsArray = [...new Set(allTags)] as string[];

            return uniqueTagsArray;
        }
    }, [])

    return (
        <section data-section="projects" className="projects">
            <div className="title-line">
                <SectionTitle Icon={ProjectsIcon} title="Projetos"/>
                <span>Use as tags para filtrar meus projetos!</span>
            </div>
            <ul className="tag-line disable-select">

                <li className="tag-list categories">
                    {categories.map((tag: string) => (
                    <label key={tag} htmlFor={`category-${tag}`}>
                        <input
                            type="radio" id={`category-${tag}`}
                            checked={displayCategory == tag}
                            onChange={() => setDisplayCategory(tag)}
                        />
                        {t(tag)}
                    </label>
                    ))}
                </li>

                <li className="tag-list filters">
                    {tags.map((tag: string) => (
                    <label key={tag}htmlFor={`tag-${tag}`}>
                        <input
                            type="checkbox" id={`tag-${tag}`}
                            checked={selectedTags.includes(tag)}
                            onChange={() => handleTagChange(tag)}
                        />
                        {t(tag)}
                    </label>
                    ))}
                </li>

            </ul>
        </section>
    )
}