import { useState } from 'react'

export const Contador = () => {
  const [count, setCount] = useState(0)

  const sumar = () => {
    setCount(count + 1)
  }

  const restar = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <p>Contador: { count }</p>
      <button onClick={sumar}>Incrementar +1</button>
      <br /><br />
      <button onClick={restar}>Decrementar -1</button>
      <br /><br />
      <button onClick={reset}>Resetear</button>
    </div>
  )
}