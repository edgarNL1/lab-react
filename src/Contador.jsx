import { useState } from 'react'

const Contador = () => {
  const [cuenta, setCuenta] = useState(0)

  return (
    <button onClick={() => setCuenta(cuenta + 1)}>
      Count is {cuenta}
    </button>
  )
}

export default Contador