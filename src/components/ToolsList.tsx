import { useTranslation } from "react-i18next";

import '../styles/components/ToolsList.scss';
import Frontend from "../assets/svg/frontend.svg?react";
import Backend from "../assets/svg/backend.svg?react";
import Database from "../assets/svg/database.svg?react";
import Tools from "../assets/svg/tools.svg?react";
import Fundamentals from "../assets/svg/fundamentals.svg?react";
import { TOOLS } from "../scripts/utils";

const ICONS: Record<string, React.ReactNode> = {
    'frontend': <Frontend/>,
    'backend': <Backend/>,
    'database': <Database/>,
    'tools': <Tools/>,
    'essentials': <Fundamentals/>
}

interface ToolsListSectionProps {
    title: string;
    icon: React.ReactNode;
    tags: string[];
}

function ToolsListSection ({title, icon, tags}: ToolsListSectionProps) {
    const {t} = useTranslation();

    return (
        <>
            <h4>
                {icon}
                {title}
            </h4>
            <ul>
                {tags.map((tag: string) => (
                    <li key={tag}>
                        {t(`tools.tags.${tag}`)}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default function ToolsList() {
    const { i18n, t } = useTranslation();

    return (
        <ul className="tools-list">
            {Object.keys(TOOLS).map((section: string) => (                
                <ToolsListSection
                    key={section}
                    title={t(`tools.sections.${section}`)}
                    icon={ICONS[section]}
                    tags={TOOLS[section]}
                />
            ))}            
        </ul>
    )
}