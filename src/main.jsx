import React from 'react'
import ReactDOM from 'react-dom/client'
import PracticaFrutas from './PracticaFrutas.jsx' // O App.jsx dependiendo de cómo nombraste tu archivo principal
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PracticaFrutas />
  </React.StrictMode>,
)