import Image from 'next/image';
import Link from 'next/link';
import Logo from "../public/Ecommerce.svg";
import { useRef } from 'react';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';


function Navbar() {
  
  const cartRef = useRef(null);

  const toggleCart = () => {
    if (cartRef.current.classList.contains('translate-x-full')) {
      cartRef.current.classList.remove('translate-x-full');
    } else {
      cartRef.current.classList.add('translate-x-full');
    }
  };

  const { cart, subTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <nav className="sticky top-0 z-10 bg-white overflow-x-hidden overflow-y-auto flex p-2 flex-col md:flex-row md:justify-start justify-between items-center shadow-md">
      
      <div className="mx-5">
        <Link href="/">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <span className="ml-3 text-xl text-primary">E-Commerce</span>
          </a>
        </Link>
      </div>

      <div>
        <ul className="flex py-2 space-x-5 font-bold text-lg">
          <li>
            <Link href="/tshirts">Tshirts</Link>
          </li>
          <li>
            <Link href="/hoodies">Hoodies</Link>
          </li>
          <li>
            <Link href="/stickers">Stickers</Link>
          </li>
          <li>
            <Link href="/mugs">Mugs</Link>
          </li>
        </ul>
      </div>

      <div
        className="absolute right-0 top-3 mx-5 cursor-pointer rounded-md bg-indigo-100 p-2 pr-3 shadow-lg"
        onClick={toggleCart}
      >
        <AiOutlineShoppingCart className="text-2xl" />
      </div>

      <div
        className="fixed top-0 right-0 h-full w-80 p-9 bg-indigo-100 transform transition-transform translate-x-full"
        ref={cartRef}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          className="absolute top-5 right-2 cursor-pointer text-2xl text-indigo-500"
          onClick={toggleCart}
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {cart &&
            cart.map((product) => (
              <li key={product.id}>
                <div className="flex my-5">
                  <div className="w-2/3 font-semibold">
                    <p>{product.name}</p>
                  </div>
                  <div className="w-1/3 font-semibold flex">
                    <AiFillMinusCircle
                      className="text-indigo-500 m-auto cursor-pointer"
                      onClick={() => dispatch(decreaseQuantity(product))}
                    />
                    <span className="mx-2">{product.quantity}</span>
                    <AiFillPlusCircle
                      className="text-indigo-500 m-auto cursor-pointer"
                      onClick={() => dispatch(increaseQuantity(product))}
                    />
                  </div>
                </div>
              </li>
            ))}
        </ol>

        <div className="flex justify-center my-3">
          <span className="font-semibold">Subtotal:</span>
          <span className="font-semibold mx-4">Rs {subTotal}</span>
        </div>

        <div className="flex justify-center mt-4">
          <Link href="/checkout">
            <button className="flex mr-5 text-white bg-indigo-500 border-0 p-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">
              <BsFillBagCheckFill className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            className="flex text-white bg-indigo-500 border-0 p-3 focus:outline-none hover:bg-indigo-600 rounded text-sm"
            onClick={() => dispatch(clearCart())}
          >
            <MdDeleteForever className="mt-[2px] text-lg" />
            Clear Cart
          </button>
        </div>
        
      </div>

    </nav>
  );
}

export default Navbar;
