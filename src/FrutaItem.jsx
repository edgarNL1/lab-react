// src/FrutaItem.jsx
import { useState } from 'react';
import Card from './Card';

export default function FrutaItem({ nombre, icono, onLike }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    const nuevoLike = likes + 1;
    setLikes(nuevoLike);
    if (onLike) {
      onLike();
    }
  };

  return (
    <Card>
      <div style={styles.imgContainer}>
        <span style={styles.emoji}>{icono}</span>
      </div>
      <h3 style={styles.nombre}>{nombre}</h3>
      
      {likes >= 3 && <p style={styles.popularText}>Muy popular</p>}

      <button onClick={handleLike} style={styles.button}>
        Like {likes}
      </button>
    </Card>
  );
}

const styles = {
  imgContainer: {
    border: '2px solid #a4ca89',
    borderRadius: '10px',
    padding: '15px',
    width: '100%',
    height: '130px',
    boxSizing: 'border-box',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  emoji: {
    fontSize: '65px'
  },
  nombre: {
    margin: '8px 0 12px 0',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Georgia, serif'
  },
  popularText: {
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '0 0 10px 0'
  },
  button: {
    backgroundColor: '#5cb85c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    width: '100%'
  }
};