import { useTranslation } from "react-i18next";
// import { useState } from 'react'

import '../styles/components/Landing.scss'
import Hero from "../assets/hero.svg?react";

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
          Currículo
        </button>
        <button>
          Projetos
        </button>
        <button>
          E
        </button>
        <button>
          L
        </button>
        <button>
          G
        </button>
        <button>
          I
        </button>
      </nav>
    </aside>
  )
}