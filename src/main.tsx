import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import "./i18n";
import './styles/_index.scss'
import App from './pages/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback="LOADING...">
      <App />
    </Suspense>
  </StrictMode>,
)
