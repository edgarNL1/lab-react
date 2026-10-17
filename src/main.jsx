import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import FirstComponent from './FirstComponent'
import Contador from './Contador'
import HelloWorld from './HelloWorld'
import Variables from './Variables'
import Ternario from './Ternario'
import OperadorAnd from './OperadorAnd'
import PanelUsuario from './PanelUsuario'
import Render2 from './Render2'
import Funciones from './Funciones'
import Lista from './Lista'

const usuario = { nombre: 'Edgar Nina Laura', bio: 'Practicando React' }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstComponent />
    <Contador />

    <HelloWorld />
    <Variables />

    <Ternario isLogged={true} />
    <Ternario isLogged={false} />

    <OperadorAnd nuevosMensajes={['Hola', 'Reunión']} />
    <OperadorAnd nuevosMensajes={[]} />

    <PanelUsuario usuario={usuario} isLoading={false} />

    <Render2 isLoading={true} usuario={usuario} />
    <Render2 isLoading={false} usuario={null} />
    <Render2 isLoading={false} usuario={usuario} />

    <Funciones estado="enviado" />
    <Funciones estado="entregado" />
    <Funciones estado="cancelado" />
    <Funciones estado="otro" />

    <Lista />
  </StrictMode>
)