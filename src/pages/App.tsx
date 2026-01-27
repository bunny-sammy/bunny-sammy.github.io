import { useEffect, useRef } from 'react'

import '../styles/layout.scss'
import '../styles/components/App.scss'
import Landing from '../components/Landing'
import Article from '../components/Article'

export default function App() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    console.log(`\
▒█░▒█ █▀▀ █░░ █░░ █▀▀█\n\
▒█▀▀█ █▀▀ █░░ █░░ █░░█\n\
▒█░▒█ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀▀\n\
█░░░█ █▀▀█ █▀▀█ █░░ █▀▀▄\n\
█▄█▄█ █░░█ █▄▄▀ █░░ █░░█\n\
░▀░▀░ ▀▀▀▀ ▀░▀▀ ▀▀▀ ▀▀▀░\n\
`);
  }, [])

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