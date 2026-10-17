const Ternario = ({ isLogged }) => {
  return (
    <div>
      <h2>Operador ternario</h2>
      {isLogged ? (
        <button>Cerrar Sesión</button>
      ) : (
        <button>Iniciar Sesión</button>
      )}
    </div>
  )
}

export default Ternario