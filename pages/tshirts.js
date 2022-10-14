import Link from "next/link";

export default function Tshirts() {
  const tshirts = [
    {
      id: 1,
      name: 'Tshirt 1',
      category: 'tshirts',
      price: 20,
      image: 'https://m.media-amazon.com/images/I/612l1zA+-tL._AC_UX679_.jpg',
    },
    {
      id: 2,
      name: 'Tshirt 1',
      category: 'tshirts',
      price: 20,
      image: 'https://m.media-amazon.com/images/I/612l1zA+-tL._AC_UX679_.jpg',
    },
    {
      id: 3,
      name: 'Tshirt 1',
      category: 'tshirts',
      price: 20,
      image: 'https://m.media-amazon.com/images/I/612l1zA+-tL._AC_UX679_.jpg',
    },
    {
      id: 4,
      name: 'Tshirt 1',
      category: 'tshirts',
      price: 20,
      image: 'https://m.media-amazon.com/images/I/612l1zA+-tL._AC_UX679_.jpg',
    },
    {
      id: 5,
      name: 'Tshirt 1',
      category: 'tshirts',
      price: 20,
      image: 'https://m.media-amazon.com/images/I/612l1zA+-tL._AC_UX679_.jpg',
    },
    {
      id: 6,
      name: 'Tshirt 1',
      category: 'tshirts',
      price: 20,
      image: 'https://m.media-amazon.com/images/I/612l1zA+-tL._AC_UX679_.jpg',
    },
    {
      id: 7,
      name: 'Tshirt 1',
      category: 'tshirts',
      price: 20,
      image: 'https://m.media-amazon.com/images/I/612l1zA+-tL._AC_UX679_.jpg',
    },
    {
      id: 8,
      name: 'Tshirt 1',
      category: 'tshirts',
      price: 20,
      image: 'https://m.media-amazon.com/images/I/612l1zA+-tL._AC_UX679_.jpg',
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-20">
        <div className="flex justify-evenly flex-wrap">
          {tshirts &&
            tshirts.map((tshirt) => (
              <Link href="/product/t-shirt" key={tshirt.id}>
                <div className="w-[70%] sm:w-[40%] md:w-[30%] lg:w-[20%] p-3 m-2 shadow-lg cursor-pointer">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="m-auto h-60 block"
                      src={tshirt.image}
                    />
                  </a>
                  <div className="mt-4 text-center sm:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {tshirt.category.toUpperCase()}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {tshirt.name.charAt(0).toUpperCase() + tshirt.name.slice(1)}
                    </h2>
                    <p className="mt-1 text-sm">Rs {tshirt.price}</p>
                    <p className="mt-1 text-sm">S, M, L, XL, XXL</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
