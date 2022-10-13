import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Navbar() {
  return (
    <nav className="flex m-2 flex-col md:flex-row md:justify-start justify-between items-center">
      <div className="mx-5">
        <Link href="/">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src="/Ecommerce.svg" alt="logo" width={40} height={40} />
            <span className="ml-3 text-xl text-primary">E-Commerce</span>
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex py-2 space-x-5 font-bold text-lg">
          <li>
            <Link href="/">Tshirts</Link>
          </li>
          <li>
            <Link href="/">Hoodies</Link>
          </li>
          <li>
            <Link href="/">Stickers</Link>
          </li>
        </ul>
      </div>
      <div className="absolute right-0 top-5 mx-5">
        <AiOutlineShoppingCart className="text-2xl" />
      </div>
    </nav>
  );
}