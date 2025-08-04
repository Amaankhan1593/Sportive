import Image from "next/image";
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
          <Image
            src="https://habitat-recreation.myshopify.com/cdn/shop/products/p22-1.jpg?v=1648541970&width=596"
            alt="Product 1"
            width={288} // matches w-72
            height={384} // matches h-96
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">Nike</p>
            <p className="text-md font-semibold text-gray-800">
              Nike Air Force 1 07 Crater Casual Shoes
            </p>
            <p className="text-lg font-bold text-gray-900 mt-1">$110.00</p>
          </div>
        </div>
        {/*  */}
        <div className="w-72">
          <Image
            src="https://habitat-recreation.myshopify.com/cdn/shop/products/p16.jpg?v=1648537134&width=1020"
            alt="Product 2"
            width={288} // Tailwind w-72 = 288px
            height={384} // Tailwind h-96 = 384px
            className="w-72 h-96 object-cover rounded-lg shadow-md"
          />
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">Adidas</p>
            <p className="text-md font-semibold text-gray-800">
             Adidas Originals Colorblock Short-Sleeve
            </p>
            <p>T-Shirt</p>
            <p className="text-lg font-bold text-gray-900 mt-1">$45.00</p>
          </div>
        </div>
        {/*  */}
        <div className="w-72">
          <img
            src="https://habitat-recreation.myshopify.com/cdn/shop/products/p15.jpg?v=1648532451&width=1200"
            alt="Product 2"
             width={288} // Tailwind w-72 = 288px
            height={384} // Tailwind h-96 = 384px
            className="w-72 h-96 object-cover rounded-lg shadow-md"
          />
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">Nike</p>
            <p className="text-md font-semibold text-gray-800">
              Icon Clash Oversized Houndstooth Crop Top
            </p>
            <p className="text-lg font-bold text-gray-900 mt-1">$45.00</p>
          </div>
        </div>
      {/*  */}
        <div className="w-72">
          <img
            src="https://habitat-recreation.myshopify.com/cdn/shop/products/p6.jpg?v=1648455950&width=1200"
            alt="Product 2"
            width={288} // Tailwind w-72 = 288px
            height={384} // Tailwind h-96 = 384px
            className="w-72 h-96 object-cover rounded-lg shadow-md"
          />
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">Timberland</p>
            <p className="text-md font-semibold text-gray-800">
              Timberland Large Logo Backpack
            </p>
            <p className="text-lg font-bold text-gray-900 mt-1">$65.00</p>
          </div>
        </div>
        {/*  */}
        <button className="rounded-full text-sm font-semibold hover:bg-black hover:text-white shadow border px-5 py-3">
          SHOP BEST SELLERS
        </button>
      {/*  */}
    <div className="relative w-fit">
      <Image
        src="https://habitat-recreation.myshopify.com/cdn/shop/files/hotspot.webp?v=1652773519&width=2564"
        alt=""
        width={2564}
        height={1443} // approximate height to maintain aspect ratio (auto)
        className="w-full h-auto"
      />

    {/* Elbow Hotspot */}
    <button
      className="absolute top-[36%] left-[44%] bg-red-600 w-8 h-8 rounded-full shadow-lg hover:scale-110 transition"
      title="Elbow Hotspot"
    >
      <span className="relative flex h-full w-full items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-white border border-red-600"></span>
      </span>
    </button>

    {/* Thigh Hotspot */}
    <button
      className="absolute top-[62%] left-[32%] bg-red-600 w-8 h-8 rounded-full shadow-lg hover:scale-110 transition"
      title="Thigh Hotspot"
    >
      <span className="relative flex h-full w-full items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-white border border-red-600"></span>
      </span>
    </button>
  </div>
      </div>
    </div>
  );
};

export default TopPicksSection;
