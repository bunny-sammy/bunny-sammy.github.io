// import { useTranslation } from "react-i18next";
// import { useState, useRef } from 'react'

import '../styles/components/About.scss';
import SectionTitle from './resusable/SectionTitle';
import AboutIcon from '../assets/icons/about_icon.svg?react';

export default function About () {
    // const { i18n, t } = useTranslation();

    return (
        <section data-section="about" className="about">
            <div className="left-pane">
                <SectionTitle Icon={AboutIcon} title="Sobre Mim"/>
                <div className="about-grid card-shadow">
                    <div className="about-left">
                        <div>
                            <h3>Quem sou eu</h3>
                            <p>
                                Olá! Eu sou David Coelho, estudante de Ciência da Computação, aspirante a <span>desenvolvedor</span> e <span>artista</span> por hobby de longa data.
                            </p>
                        </div>
                        <div>
                            <h3>Qual o meu propósito</h3>
                            <p>
                                Atualmente estou me aperfeiçoando no desenvolvimento web, acumulando experiências com diversas stacks e tecnologias. 
                            </p>
                        </div>
                        <div>
                            <h3>Como cheguei aqui</h3>
                            <p>
                                Sempre fui fascinado pela arte de contar histórias e comunicar ideias. Após me aventurar por várias mídias como desenvolvimento de jogos e ilustração, encontrei no desenvolvimento web a união das minhas paixões por estética, storytelling e engenharia de software.
                            </p>
                        </div>
                    </div>
                    <div className="about-right">
                        <h3>O que faço de melhor</h3>
                        HABILIDADES
                    </div>
                </div>                
            </div>
        </section>
    ) 
}