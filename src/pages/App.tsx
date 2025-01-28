import { useTranslation } from "react-i18next";
import { useState } from 'react'

import '../styles/App.scss'

export default function App() {
  const { i18n, t } = useTranslation();

  return (
    <main>
      <div>
        <img></img>
        <h1>David Coelho</h1>
        <h2>{t('occupation')}</h2>
        <ul>
          <li>
            Linkedin
          </li>
          <li>
            Github
          </li>
          <li>
            Instagram
          </li>
        </ul>
      </div>
    </main>
  )
}