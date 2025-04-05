// import { useTranslation } from "react-i18next";
// import { useState, useRef } from 'react'

import '../styles/components/About.scss';
import SectionTitle from './resusable/SectionTitle';
import SquareList from './resusable/SquareList';
import AboutIcon from '../assets/icons/about_icon.svg?react';

export default function About () {
    // const { i18n, t } = useTranslation();

    return (
        <section data-section="about" className="about">
            <div className="left-pane">
                <SectionTitle Icon={AboutIcon} title="Sobre Mim"/>
                <div className="about-grid">
                    <div className="about-card">
                        <h3>Quem sou eu</h3>
                        <p>
                            Olá! Eu sou David Coelho, estudante de Ciência da Computação, aspirante a <span>desenvolvedor</span> e <span>artista</span> por hobby de longa data.
                        </p>
                    </div>
                    <div className="about-card clear">
                        <h3>Qual o meu propósito</h3>
                        <p>
                            Atualmente estou me aperfeiçoando no devenvolvimento web frontend e tenho experiência em outras áreas criativas como desenvolvimento de jogos e ilustração.
                        </p>
                    </div>
                    <div className="about-card skills">
                        <h3>O que faço de melhor</h3>
                        HABILIDADES
                    </div>
                    <div className="about-card clear">
                        <h3>Como cheguei aqui</h3>
                        <p>
                            Sempre fui fascinado pela arte de contar histórias e comunicar ideias. Após me aventurar por várias mídias, encontrei no desenvolvimento web a união das minhas paixões por estética, storytelling e engenharia de software.
                        </p>
                    </div>
                    <div className="about-card">
                        <h3>Quanto mais quer saber?</h3>
                        <p>
                            A melhor forma de me conhecer é através dos meus <span>projetos</span>. Continue rolando e descubra no que tenho trabalhado!
                        </p>
                    </div>
                </div>
                {/* <div className="lists-container">
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
                </div> */}
            </div>
        </section>
    ) 
}