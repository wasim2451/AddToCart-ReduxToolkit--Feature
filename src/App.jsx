import './App.css';
import cartData from '../products.json';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
         {cartData.map((item) => (
        <Card
          key={item.id}
          productName={item.productName}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
    </>
  );
}

export default App;
