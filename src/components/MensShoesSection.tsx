"use client";
import React from "react";
import Image from "next/image";

const MensShoesSection = () => {
  return (
    <div className="bg-white py-16 px-4">
      {/* Heading */}
      <h1 className="text-center text-4xl font-bold mb-2">
        <i>MEN S SHOES</i>
      </h1>
      <p className="text-center text-lg text-gray-700 mb-6">
        We have different and beautiful types of shoes.
      </p>

      {/* Image Row */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* Product 1 */}
        <div className="w-100">
          <div className="w-full h-[28rem] relative rounded-lg shadow-md overflow-hidden">
            <Image
              src="https://habitat-recreation.myshopify.com/cdn/shop/products/p14.jpg?v=1648531661&width=1220"
              alt="Nike Air Force 1 '07 Crater Casual Shoes"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">Nike</p>
            <p className="text-md text-gray-800">
              Nike Waffle One Casual Shoes
            </p>
            <p className="text-lg text-red-600 mt-1">$110.00</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-100">
          <div className="w-full h-[28rem] relative rounded-lg shadow-md overflow-hidden">
            <Image
              src="https://habitat-recreation.myshopify.com/cdn/shop/products/p13.jpg?v=1648466608&width=1220"
              alt="Nike Air Zoom Pegasus 38 Running Shoes"
              fill
              className="object-cover"
            />
          </div>
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
          <div className="w-full h-[28rem] relative rounded-lg shadow-md overflow-hidden">
            <Image
              src="https://habitat-recreation.myshopify.com/cdn/shop/products/p02.jpg?v=1648449191&width=1220"
              alt="Money Basketball Shoes"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">New Balance</p>
            <p className="text-md text-gray-800">Money Basketball Shoes</p>
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

      {/* Moving Text Banner */}
      <div className="relative overflow-hidden mt-8 py-4">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <span className="marquee-text">
              FREE SHIPPING ON ALL ORDERS OVER $40
            </span>
            <span className="marquee-text">
              FREE SHIPPING ON ALL ORDERS OVER $40
            </span>
          </div>
        </div>

        <style jsx>{`
          .marquee-wrapper {
            display: flex;
            white-space: nowrap;
          }

          .marquee-track {
            display: flex;
            animation: marquee 20s linear infinite;
          }

          .marquee-text {
            font-size: 7rem;
            font-weight: 600;
            letter-spacing: 0.2em;
            color: transparent;
            -webkit-text-stroke: 2px #e51d1d;
            text-stroke: 2px #e51d1d;
            padding-right: 5rem;
            white-space: nowrap;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default MensShoesSection;
