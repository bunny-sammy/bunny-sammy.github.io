import { useTranslation } from "react-i18next";
// import { useState } from 'react'

import '../styles/components/Landing.scss'
import Hero from "../assets/svg/hero.svg?react";
import Resume from "../assets/svg/resume.svg?react";
import Email from "../assets/svg/mail.svg?react";
import Github from "../assets/svg/github.svg?react";
import Linkedin from "../assets/svg/linkedin.svg?react";
import Instagram from "../assets/svg/instagram.svg?react";
import Down from "../assets/svg/down.svg?react";

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
        <a href="#article" id="down">
          <Down />
        </a>
      </hgroup>
    </aside>
  )
}