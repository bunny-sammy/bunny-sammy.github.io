// import { useTranslation } from "react-i18next";
// import { useState } from 'react'

import '../styles/layout.scss'
import '../styles/components/App.scss'
import Landing from '../components/Landing'
import Article from '../components/Article'

export default function App() {
  // const { i18n, t } = useTranslation();

  return (
    <>
      <div className="gradient"/>
      <main>
        <Landing />
        <Article />
      </main>
    </>
  )
}