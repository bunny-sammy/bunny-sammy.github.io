import { useTranslation } from "react-i18next";

import '../styles/components/ToolsList.scss';
import Frontend from "../assets/svg/frontend.svg?react";
import Backend from "../assets/svg/backend.svg?react";
import Database from "../assets/svg/database.svg?react";
import Tools from "../assets/svg/tools.svg?react";
import Fundamentals from "../assets/svg/fundamentals.svg?react";

export default function ToolsList() {
    // const { i18n, t } = useTranslation();

    return (
        <ul className="tools-list">
            <h4>
                <Frontend />
                Frontend
            </h4>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Laravel Blade
                </li>
                <li>
                    TypeScript
                </li>
                <li>
                    JavaScript
                </li>
                <li>
                    Ajax
                </li>
                <li>
                    ChartJS
                </li>
                <li>
                    SCSS
                </li>
                <li>
                    Tailwind
                </li>
                <li>
                    HTML5
                </li>
                <li>
                    CSS3
                </li>
            </ul>
            <h4>
                <Backend />
                Backend
            </h4>
            <ul>
                <li>
                    Laravel
                </li>
                <li>
                    Next
                </li>
                <li>
                    Django
                </li>
            </ul>
            <h4>
                <Database />
                Banco de Dados
            </h4>
            <ul>
                <li>
                    MongoDB
                </li>
                <li>
                    PostgreSQL
                </li>
            </ul>
            <h4>
                <Tools />
                Ferramentas
            </h4>
            <ul>
                <li>
                    Git
                </li>
                <li>
                    Vercel
                </li>
                <li>
                    Figma
                </li>
                <li>
                    Affinity 3.0
                </li>
            </ul>
            <h4>                
                <Fundamentals />
                Essenciais
            </h4>
            <ul>
                <li>
                    Design Responsivo
                </li>
                <li>
                    Arquitetura em Componentes
                </li>
                <li>
                    Prototipação
                </li>
                <li>
                    Ilustração Vetorial
                </li>
                <li>
                    Motion Design
                </li>
            </ul>
        </ul>
    )
}