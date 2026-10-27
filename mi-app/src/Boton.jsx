const Boton = () => {
  const handleClick = () => {
    alert('¡Hiciste click!')
  }

  return (
    <div>
      <button onClick={handleClick}>Haz Click aqui</button>
    </div>
  )
}

export default Boton