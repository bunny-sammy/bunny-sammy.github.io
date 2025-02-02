import { useTranslation } from "react-i18next";
import { useState } from 'react'

import '../styles/components/App.scss'
import Landing from "../components/Landing";

export default function App() {
  const { i18n, t } = useTranslation();

  return (
    <main>
      <Landing/>
    </main>
  )
}