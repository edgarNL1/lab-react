// src/PracticaFrutas.jsx
import { useState } from 'react';
import FrutaItem from './FrutaItem';

export default function PracticaFrutas() {
  const [totalLikes, setTotalLikes] = useState(0);
  const [busqueda, setBusqueda] = useState('');

  const frutasIniciales = [
    { id: 1, nombre: 'Manzana', icono: '🍎' },
    { id: 2, nombre: 'Uva', icono: '🍇' },
    { id: 3, nombre: 'Sandia', icono: '🍉' }
  ];

  const incrementarTotalLikes = () => {
    setTotalLikes(prevTotal => prevTotal + 1);
  };

  const frutasFiltradas = frutasIniciales.filter(fruta =>
    fruta.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Total de likes de frutas: {totalLikes}</h2>

      <input
        type="text"
        placeholder="Ingrese nombre de una fruta"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={styles.input}
      />

      {frutasFiltradas.length === 0 && (
        <p style={styles.noResults}>
          No se encontraron frutas con el nombre "{busqueda}"
        </p>
      )}

      <div style={styles.grid}>
        {frutasFiltradas.map((fruta) => (
          <FrutaItem
            key={fruta.id}
            nombre={fruta.nombre}
            icono={fruta.icono}
            onLike={incrementarTotalLikes}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  titulo: {
    color: '#111',
    fontFamily: 'Georgia, serif',
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  input: {
    padding: '12px 18px',
    width: '350px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '30px',
    fontSize: '14px',
    outline: 'none',
    textAlign: 'center'
  },
  noResults: {
    color: '#888',
    fontSize: '18px',
    marginTop: '20px',
    fontStyle: 'italic'
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '25px'
  }
};