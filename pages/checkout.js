import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

function Checkout({
  cart,
  subTotal,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-8 text-gray-900">
            Checkout
          </h1>
          <p className="mx-auto">Delivery Details</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap">
            <div className="p-2 w-1/2">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-1/2">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.com"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-1/2">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <label
                htmlFor="address"
                className="leading-7 text-sm text-gray-600"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                placeholder="House No. 123, Street No. 123, Area, City"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            {/* <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
        </div>
        <h1 className="text-center py-3 sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Cart
        </h1>
        <div className="flex justify-center items-center w-full">
          <ol className="list-decimal font-semibold">
            {cart &&
              cart.map((product) => (
                <li key={product.id}>
                  <div className="flex my-5">
                    <div className="w-20 font-semibold">
                      <p>{product.name}</p>
                    </div>
                    <div className="font-semibold w-40 flex justify-center items-center">
                      <AiFillMinusCircle
                        className="text-indigo-500 m-auto cursor-pointer"
                        onClick={() => decreaseQuantity(product)}
                      />
                      <span className="mx-2">{product.quantity}</span>
                      <AiFillPlusCircle
                        className="text-indigo-500 m-auto cursor-pointer"
                        onClick={() => increaseQuantity(product)}
                      />
                    </div>
                  </div>
                </li>
              ))}
          </ol>

          <div className="my-3">
            <span className="font-semibold">Subtotal:</span>
            <span className="font-semibold mx-4">Rs {subTotal}</span>
          </div>

          <button
            className="my-auto text-white bg-indigo-500 border-0 p-3 focus:outline-none hover:bg-indigo-600 rounded text-sm"
            onClick={clearCart}
          >
            <MdDeleteForever className="mt-[2px] text-lg" />
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
