import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import PracticaFrutas from './PracticaFrutas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PracticaFrutas />
  </StrictMode>,
)