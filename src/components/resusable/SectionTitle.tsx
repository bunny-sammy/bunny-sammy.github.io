import { ElementType } from 'react';

import '../../styles/components/SectionTitle.scss';

interface SectionTitleProps {
    Icon: ElementType,
    title: string,
}

export default function SectionTitle ({Icon, title}: SectionTitleProps) {

    return (
        <div className="section-title">
            <Icon/>
            <h2>{title}</h2>
        </div>
    )
}