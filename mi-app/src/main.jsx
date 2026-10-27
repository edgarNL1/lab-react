import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './estilos.css'
import MyComponent from './MyComponent'
import Avatar from './Avatar'
import Boton from './Boton'
import { Contador } from './Contador'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyComponent />
    <Avatar />
    <Boton />
    <Contador />
  </StrictMode>
)