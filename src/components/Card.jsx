import React from 'react';

// Define the ProductCard component
 const Card = (product) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.productName} style={styles.image} />
      <div style={styles.details}>
        <h3 style={styles.productName}>{product.productName}</h3>
        <p style={styles.price}>Price: ${product.price}</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

// Styles for the card
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '300px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height :'250px',
    borderRadius: '4px',
  },
  details: {
    marginTop: '12px',
  },
  productName: {
    margin: '8px 0',
    fontSize: '18px',
  },
  price: {
    color: '#888',
    fontSize: '16px',
  },
};
export default Card ;