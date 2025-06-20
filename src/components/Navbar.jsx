import React from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
    const data=useSelector((state)=>state.addToCart.data);
    console.log(data);
    const totalPrice = data.reduce((accumulator, currentValue) => {
         return accumulator + parseInt(currentValue.price);
    }, 0);
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
        Total Items: <span style={styles.highlight}>{data.length!=0?data.length:0}</span>
      </div>
      <div style={styles.navItem}>
        Total Price: <span style={styles.highlight}>{totalPrice}</span>
      </div>
    </nav>
  );
};
export default Navbar;