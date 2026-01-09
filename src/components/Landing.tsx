import { useTranslation } from "react-i18next";
// import { useState } from 'react'

import '../styles/components/Landing.scss'
import Hero from "../assets/hero.svg?react";
import Resume from "../assets/resume.svg?react";
import Email from "../assets/mail.svg?react";
import Github from "../assets/github.svg?react";
import Linkedin from "../assets/linkedin.svg?react";
import Instagram from "../assets/instagram.svg?react";

export default function Landing() {
  const { i18n, t } = useTranslation();

  return (
    <aside>
      <Hero id="hero" />
      <hgroup>
        <h1 className="playwrite">
          David Coelho
        </h1>
        <h2>{t(`landing.occupation`)}</h2>
      </hgroup>
      <nav>
        <button>
          <Resume />
          Currículo
        </button>
        <button>
          <Email />
        </button>
        <button>
          <Linkedin />
        </button>
        <button>
          <Github />
        </button>
        <button>
          <Instagram />
        </button>
      </nav>
    </aside>
  )
}