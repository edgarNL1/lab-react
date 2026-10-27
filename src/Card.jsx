// src/Card.jsx
export default function Card({ children }) {
  return (
    <div style={styles.card}>
      {children}
    </div>
  );
}

const styles = {
  card: {
    border: '2px solid #e0e0e0',
    borderRadius: '16px',
    padding: '20px',
    width: '200px',
    textAlign: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
  }
};