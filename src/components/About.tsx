// import { useTranslation } from "react-i18next";
// import { useState, useRef } from 'react'

import '../styles/components/About.scss';
import SectionTitle from './resusable/SectionTitle';
import SquareList from './resusable/SquareList';
import balloons from '../assets/images/abou_balloons.png';
import AboutIcon from '../assets/icons/about_icon.svg?react';

export default function About () {
    // const { i18n, t } = useTranslation();

    return (
        <section data-section="about" className="about">
            <div className="left-pane">
                <SectionTitle Icon={AboutIcon} title="Sobre Mim"/>
                <p>
                    Olá! Eu sou David Coelho, estudante de Ciência da Computação, aspirante a <span>desenvolvedor</span> e <span>artista</span> por hobby de longa data.
                </p>
                <p>
                    Atualmente estou me aperfeiçoando no devenvolvimento web frontend, mas tenho experiência em outras áreas criativas como desenvolvimento de jogos e ilustração.
                </p>
                <div className="lists-container">
                    <SquareList
                        title="Ferramentas"
                        subtitle="Me aperfeiçoando nestas tecnologias"
                        list={[
                            'Laravel', 'React', 'Next.js', 'TypeScript', 'SCSS', 'MySQL', 'MongoDB',
                        ]}
                    />
                    <SquareList
                        title="Interesses"
                        subtitle="Experiência acumulada por anos de curiosidade"
                        list={[
                            'C# / Unity', 'Java / Swing', 'Python', 'Ilustração', 'Storyboarding',
                        ]}
                    />
                </div>
            </div>
            <img src={balloons}/>
        </section>
    ) 
}