import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';

export default function Navbar() {
  const cart = useRef(null);

  const toggleCart = () => {
    if (cart.current.classList.contains('translate-x-full')) {
      cart.current.classList.remove('translate-x-full');
    } else {
      cart.current.classList.add('translate-x-full');
    }
  };

  return (
    <nav className="flex p-2 flex-col md:flex-row md:justify-start justify-between items-center shadow-md">
      <div className="mx-5">
        <Link href="/">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src="/Ecommerce.svg" alt="logo" width={40} height={40} />
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
        className="fixed right-0 top-3 mx-5 cursor-pointer rounded-full bg-white p-2 shadow-inner"
        onClick={toggleCart}
      >
        <AiOutlineShoppingCart className="text-2xl" />
      </div>

      <div
        className="fixed z-10 overflow-x-hidden overflow-y-auto top-0 right-0 h-full w-80 p-10 bg-indigo-100 transform transition-transform translate-x-full"
        ref={cart}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          className="absolute top-5 right-2 cursor-pointer text-2xl text-indigo-500"
          onClick={toggleCart}
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="flex my-5">
              <div className="w-2/3 font-semibold">
                T-Shirst -- Your Own Shop
              </div>
              <div className="w-1/3 font-semibold flex justify-center items-center">
                <AiFillMinusCircle className="text-indigo-500 cursor-pointer" />
                <span className="mx-2">1</span>
                <AiFillPlusCircle className="text-indigo-500 cursor-pointer" />
              </div>
            </div>
          </li>
        </ol>

        <div className="flex justify-center mt-8">
          <button className="flex my-auto mr-5 text-white bg-indigo-500 border-0 p-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">
            <BsFillBagCheckFill className="m-1" />
            Checkout
          </button>   
          <button className="flex my-auto text-white bg-indigo-500 border-0 p-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">
            <MdDeleteForever className="mt-[2px] text-lg" />
            Clear Cart
          </button>
        </div>

      </div>
    </nav>
  );
}
