const PanelUsuario = ({ usuario, isLoading }) => {
  if (isLoading) {
    return <div>Cargando perfil...</div>
  }

  if (!usuario) {
    return <div>No existe usuario</div>
  }

  return (
    <div className="perfil">
      <h2>{usuario.nombre}</h2>
      <p>{usuario.bio}</p>
    </div>
  )
}

export default PanelUsuario