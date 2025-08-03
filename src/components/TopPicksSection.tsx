import React from "react";

const TopPicksSection = () => {
  return (
    <div className="bg-white">
      <h1 className="flex justify-center items-center mt-20 text-3xl font-bold">
        <i>TOP PICKS</i>
      </h1>
      <p className="flex justify-center items-center text-lg mt-2 text-gray-700">
        New arrivals coming in regularly, find the freshest modern styles here.
      </p>

      {/* Image row */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        <div className="w-72">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-md"
            src="https://habitat-recreation.myshopify.com/cdn/shop/products/p22-1.jpg?v=1648541970&width=596"
            alt="Product 1"
          />
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">Nike</p>
            <h2 className="text-md font-semibold text-gray-800">
              Nike Air Force 1 '07 Crater Casual Shoes
            </h2>
            <p className="text-lg font-bold text-gray-900 mt-1">$110.00</p>
          </div>
        </div>
        {/*  */}
        <div className="w-72">
          <img
            className="w-72 h-96 object-cover rounded-lg shadow-md"
            src="https://habitat-recreation.myshopify.com/cdn/shop/products/p16.jpg?v=1648537134&width=1020"
            alt="Product 2"
          />
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">Adidas</p>
            <h2 className="text-md font-semibold text-gray-800">
             Adidas Originals Colorblock Short-Sleeve
            </h2>
            <p>T-Shirt</p>
            <p className="text-lg font-bold text-gray-900 mt-1">$45.00</p>
          </div>
        </div>
        {/*  */}
        <div className="w-72">
          <img
            className="w-72 h-96 object-cover rounded-lg shadow-md"
            src="https://habitat-recreation.myshopify.com/cdn/shop/products/p15.jpg?v=1648532451&width=1200"
            alt="Product 2"
          />
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">Nike</p>
            <h2 className="text-md font-semibold text-gray-800">
              Icon Clash Oversized Houndstooth Crop Top
            </h2>
            <p className="text-lg font-bold text-gray-900 mt-1">$45.00</p>
          </div>
        </div>
      {/*  */}
        <div className="w-72">
          <img
            className="w-72 h-96 object-cover rounded-lg shadow-md"
            src="https://habitat-recreation.myshopify.com/cdn/shop/products/p6.jpg?v=1648455950&width=1200"
            alt="Product 2"
          />
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">Timberland</p>
            <h2 className="text-md font-semibold text-gray-800">
              Timberland Large Logo Backpack
            </h2>
            <p className="text-lg font-bold text-gray-900 mt-1">$65.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicksSection;
