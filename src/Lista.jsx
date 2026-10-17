const Lista = () => {
  const frutas = ['manzana', 'pera', 'sandia']

  return (
    <ul>
      {frutas.map((fruta) => (
        <li key={fruta}>Fruta: {fruta}</li>
      ))}
    </ul>
  )
}

export default Lista