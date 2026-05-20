import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react'
import { LINKS } from "../scripts/utils";

import '../styles/components/Landing.scss'
import Hero from "../assets/svg/hero.svg?react";
import Resume from "../assets/svg/resume.svg?react";
import Email from "../assets/svg/mail.svg?react";
import Github from "../assets/svg/github.svg?react";
import Linkedin from "../assets/svg/linkedin.svg?react";
import Instagram from "../assets/svg/instagram.svg?react";
import Down from "../assets/svg/down.svg?react";

export default function Landing() {
  const { t } = useTranslation();
  const [animateHero, setAnimateHero] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateHero(true);
    }, 900);
  }, [])

  return (
    <aside>
      <Hero id="hero" className={animateHero ? "animate" : ""} />
      <hgroup>
        <h1 className="playwrite">
          David Coelho
        </h1>
        <h2>{t(`landing.occupation`)}</h2>      
        <nav>
          <a target="_blank" href={t(`landing.resume.url`)}>
            <Resume />
            {t(`landing.resume.title`)}
          </a>
          <a target="_blank" href={LINKS['email']}>
            <Email />
          </a>
          <a target="_blank" href={LINKS['linkedin']}>
            <Linkedin />
          </a>
          <a target="_blank" href={LINKS['github']}>
            <Github />
          </a>
          <a target="_blank" href={LINKS['instagram']}>
            <Instagram />
          </a>
        </nav>
        <a href="#article" id="down">
          <Down />
        </a>
      </hgroup>
    </aside>
  )
}