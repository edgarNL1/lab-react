const Funciones = ({ estado }) => {
  const renderEstado = () => {
    switch (estado) {
      case 'enviado':
        return <h2>Enviado</h2>
      case 'entregado':
        return <h2>Entregado</h2>
      case 'cancelado':
        return <h2>Cancelado</h2>
      default:
        return <h2>Desconocido</h2>
    }
  }

  return (
    <div className="tarjeta-pedido">
      {renderEstado()}
      <span>Estado: {estado}</span>
    </div>
  )
}

export default Funciones