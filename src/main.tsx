import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import "./i18n";
import './index.scss'
import App from './views/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback="LOADING...">
      <App />
    </Suspense>
  </StrictMode>,
)
