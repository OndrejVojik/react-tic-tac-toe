import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Game from './Game.tsx'
import { BrowserRouter } from 'react-router-dom'

const basePath = import.meta.env.BASE_URL || "/react-tic-tac-toe";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basePath}>
      <Game />
    </BrowserRouter>
  </StrictMode>,
)
