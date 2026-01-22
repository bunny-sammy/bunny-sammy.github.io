import { useTranslation } from "react-i18next";
// import { useState } from 'react'

import '../styles/components/Article.scss'
import About from "../assets/svg/user.svg?react";
import Tools from "../assets/svg/tools.svg?react";
import Projects from "../assets/svg/projects.svg?react";
import Labs from "../assets/svg/labs.svg?react";
import Contact from "../assets/svg/contact.svg?react";
import ContactList from "./ContactList";
import ToolsList from "./ToolsList";
import ProjectsList from "./ProjectsList";
import Modal from "./Modal";

export default function Article() {
  const { i18n, t } = useTranslation();

  return (
    <article id="article">        
        <div className="article-card">
          <hgroup>
            <About />
            <h3>{t(`about.title`)}</h3>
          </hgroup>
          <p>
            Olá! Eu sou David Coelho, recém-formado em Ciência da Computação, desenvolvedor web focado em experiência de usuário e artista por hobby de longa data.
          </p>
          <p>
            Atualmente estou me aperfeiçoando no desenvolvimento web, acumulando experiências com diversas stacks e tecnologias.
          </p>
        </div>
        <div className="article-card">
          <hgroup>
            <Tools />
            <h3>Habilidades</h3>
          </hgroup>
            <ToolsList />
        </div>
        <div className="article-card">
          <hgroup>
            <Projects />
            <h3>Projetos</h3>
          </hgroup>
          <p>
            Você pode conhecer melhor o meu trabalho a partir destes projetos.
          </p>
          <ProjectsList />
        </div>
        <div className="article-card">
          <hgroup>
            <Labs />
            <h3>Experimentos</h3>
          </hgroup>
          <p>
            Aqui estão reunidas algumas páginas que criei para estudar algum conceito específico.
          </p>
        </div>
        <div className="article-card">
          <hgroup>
            <Contact />
            <h3>Contato</h3>
          </hgroup>
          <p>
            Na internet toda ideia tem seu lugar e sua audiência, por mais única que seja. Vamos criar algo incrível juntos!
          </p>
          <ContactList />
        </div>
        <p id="copyright">
          © {new Date().getFullYear()} David Coelho. Todos os direitos reservados.
        </p>
    </article>
  )
}