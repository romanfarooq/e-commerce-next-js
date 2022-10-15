import '../styles/globals.css';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'T-Shirt',
      quantity: 1,
      price: 1000,
    },
  ]);
  const [subTotal, setSubTotal] = useState(
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  const addToCart = (product) => {
    if (cart.length === 0) {
      setCart([product]);
      setSubTotal(product.price);
    } else {
      const newCart = [...cart];
      const productIndex = newCart.findIndex((item) => item.id === product.id);
      if (productIndex === -1) {
        newCart.push(product);
        setCart(newCart);
        setSubTotal(subTotal + product.price);
      } else {
        newCart[productIndex].quantity += 1;
        setCart(newCart);
        setSubTotal(subTotal + product.price);
      }
    }
  };

  const increaseQuantity = (product) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex((item) => item.id === product.id);
    newCart[productIndex].quantity += 1;
    setCart(newCart);
    setSubTotal(subTotal + product.price);
  };

  const decreaseQuantity = (product) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex((item) => item.id === product.id);
    if (newCart[productIndex].quantity === 1) {
      newCart.splice(productIndex, 1);
      setCart(newCart);
      setSubTotal(subTotal - product.price);
    } else {
      newCart[productIndex].quantity -= 1;
      setCart(newCart);
      setSubTotal(subTotal - product.price);
    }
  };

  const clearCart = () => {
    setCart([]);
    setSubTotal(0);
  };

  return (
    <>
      <Navbar
        cart={cart}
        subTotal={subTotal}
        clearCart={clearCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <Component {...pageProps} addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default MyApp;
