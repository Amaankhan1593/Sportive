import React from 'react';

const MensShoesSection = () => {
  return (
    <div className="bg-white py-16 px-4">
      {/* Heading */}
      <h1 className="text-center text-4xl font-bold mb-2">
        <i>MEN'S SHOES</i>
      </h1>
      <p className="text-center text-lg text-gray-700 mb-10">
        We have different and beautiful types of shoes.
      </p>

      {/* Image Row */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* Product 1 */}
        <div className="w-100">
          <img
            className="w-full h-[28rem] object-cover rounded-lg shadow-md"
            src="https://habitat-recreation.myshopify.com/cdn/shop/products/p14.jpg?v=1648531661&width=1220"
            alt="Nike Air Force 1 '07 Crater Casual Shoes"
          />
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">Nike</p>
            <p className="text-md text-gray-800">
              Nike Waffle One Casual Shoes
            </p>
            <p className="text-lg  text-red-600 mt-1">$110.00</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-100">
          <img
            className="w-full h-[28rem] object-cover rounded-lg shadow-md"
            src="https://habitat-recreation.myshopify.com/cdn/shop/products/p13.jpg?v=1648466608&width=1220"
            alt="Adidas Originals Colorblock Short-Sleeve T-Shirt"
          />
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">Nike</p>
            <p className="text-md text-gray-800">
               Nike Air Zoom Pegasus 38 Running Shoes
            </p>
            <p className="text-lg text-red-600 mt-1">$120.00</p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-100">
          <img
            className="w-full h-[28rem] object-cover rounded-lg shadow-md"
            src="https://habitat-recreation.myshopify.com/cdn/shop/products/p02.jpg?v=1648449191&width=1220"
            alt="Icon Clash Oversized Houndstooth Crop Top"
          />
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">New Balance</p>
            <p className="text-md text-gray-800">
              Money Basketball Shoes
            </p>
            <p className="text-lg text-red-600 mt-1">$160.00</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center">
        <button
          className="rounded-full text-sm font-semibold bg-white text-black hover:bg-black hover:text-white border shadow px-6 py-4 transition-colors duration-200"
          type="button"
          aria-label="Shop Best Sellers"
        >
          SHOP BEST SELLERS
        </button>
      </div>
    </div>
  );
};

export default MensShoesSection;
