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
import LabsList from "./LabsList";

export default function Article() {
  const { t } = useTranslation();

  return (
    <article id="article">        
        <div className="article-card">
          <hgroup>
            <About />
            <h3>{t(`about.title`)}</h3>
          </hgroup>
          <p>
            {t(`about.body.0`)}
          </p>
          <p>
            {t(`about.body.1`)}
          </p>
        </div>
        <div className="article-card">
          <hgroup>
            <Tools />
            <h3>{t(`tools.title`)}</h3>
          </hgroup>
            <ToolsList />
        </div>
        <div className="article-card">
          <hgroup>
            <Projects />
            <h3>{t(`projects.title`)}</h3>
          </hgroup>
          <p>
            {t(`projects.body.0`)}
          </p>
          <ProjectsList />
        </div>
        <div className="article-card">
          <hgroup>
            <Labs />
            <h3>{t(`labs.title`)}</h3>
          </hgroup>
          <p>
            {t(`labs.body.0`)}
          </p>
          <LabsList />
        </div>
        <div className="article-card">
          <hgroup>
            <Contact />
            <h3>{t(`contact.title`)}</h3>
          </hgroup>
          <p>
            {t(`contact.body.0`)}
          </p>
          <ContactList />
        </div>
        <p id="copyright">
          © {new Date().getFullYear()} David Coelho. {t(`contact.copyright`)}
        </p>
    </article>
  )
}