import React from "react";
const Navbar = ({ totalItems, totalPrice }) => {
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    height:'50px',
    gap:'100px'
  },
  navItem: {
    fontSize: '25px',
    fontWeight:'600'
  },
  highlight: {
    fontWeight: 'bold',
    color: '#ffd700',
  },
};

  return (
    <nav style={styles.navbar}>
      <div style={styles.navItem}>
        Total Items: <span style={styles.highlight}>{totalItems?totalItems:0}</span>
      </div>
      <div style={styles.navItem}>
        Total Price: <span style={styles.highlight}>$1000</span>
      </div>
    </nav>
  );
};
export default Navbar;