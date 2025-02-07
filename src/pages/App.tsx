import { useTranslation } from "react-i18next";
import { useState } from 'react'

import '../styles/components/App.scss'
import Header from "../components/Header";
import Main from "../components/Main";

export default function App() {
  // const { i18n, t } = useTranslation();

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}