const Render2 = ({ isLoading, usuario }) => {
  if (isLoading) {
    return <div>Cargando perfil...</div>
  }

  if (!usuario) {
    return <div>No existe usuario</div>
  }

  return (
    <div className="perfil">
      <h2>Render 2</h2>
      <p>{usuario.nombre}</p>
    </div>
  )
}

export default Render2