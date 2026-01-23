import { useTranslation } from "react-i18next";

import '../styles/components/LabsList.scss';
import { LABS } from "../scripts/utils";
import { Lab } from "../types/labs";

export default function LabsList() {
    const { t } = useTranslation();

    const labsOrdered = [...LABS]
        .sort((a: Lab, b: Lab) => t(`labs.data.${a.id}.title`).localeCompare(t(`labs.data.${b.id}.title`)))
        .sort((a: Lab, b: Lab) => b.year - a.year);

    return (
        <ul className="labs-list">
            {labsOrdered.map((lab: Lab) => (
                <a key={lab.id} target="_blank" className="labs-card hover-effect" href={lab.link}>
                    <h4>{t(`labs.data.${lab.id}.title`)}</h4>
                    <ul className="lab-tags">
                        <li key="year">{lab.year}</li>
                        {lab.tags.map((tag: string) => (
                            <li key={tag}>{t(`tools.tags.${tag}`)}</li>
                        ))}
                    </ul>
                </a>
            ))}
        </ul>
    )
}