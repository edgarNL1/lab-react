const OperadorAnd = ({ nuevosMensajes = [] }) => {
  return (
    <div>
      <h2>Buzón de entrada</h2>
      {nuevosMensajes.length > 0 && (
        <span className="badge">Tienes mensajes sin leer</span>
      )}
    </div>
  )
}

export default OperadorAnd