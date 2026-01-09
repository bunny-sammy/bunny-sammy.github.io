import { useTranslation } from "react-i18next";
// import { useState } from 'react'

import '../styles/components/Article.scss'
import About from "../assets/user.svg?react";
import Tools from "../assets/tools.svg?react";
import Projects from "../assets/projects.svg?react";
import Labs from "../assets/labs.svg?react";
import Contact from "../assets/contact.svg?react";

export default function Article() {
  const { i18n, t } = useTranslation();

  return (
    <article id="article">
        <div className="article-card">
          <hgroup>
            <About />
            <h3>Sobre</h3>
          </hgroup>
          <p>
            Olá! Eu sou David Coelho, recém formado em Ciência da Computação, desebvikvedor web focado em experiência de usuário e artista por hobby de longa data.
          </p>
          <p>
            Atualmente estou me aperfeiçoando no desenvolvimento web, acumulando experiências com diversas stacks e tecnologias.
          </p>
        </div>
        <div className="article-card">
          <hgroup>
            <Tools />
            <h3>Ferramentas</h3>
          </hgroup>
        </div>
        <div className="article-card">
          <hgroup>
            <Projects />
            <h3>Projetos</h3>
          </hgroup>
        </div>
        <div className="article-card">
          <hgroup>
            <Labs />
            <h3>Experimentos</h3>
          </hgroup>
        </div>
        <div className="article-card">
          <hgroup>
            <Contact />
            <h3>Contato</h3>
          </hgroup>
        </div>
    </article>
  )
}