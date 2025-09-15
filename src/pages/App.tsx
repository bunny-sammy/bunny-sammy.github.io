// import { useTranslation } from "react-i18next";
// import { useState } from 'react'

import '../styles/components/App.scss'
import Header from "../components/Header";
import About from "../components/About";
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function App() {
  // const { i18n, t } = useTranslation();

  return (
    <>
      <Header/>
      <main>
        <About/>
        <Projects/>
      </main>
      <Footer/>
    </>
  )
}