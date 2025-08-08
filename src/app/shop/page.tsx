import React from "react";
import Image from "next/image";
import products from "@/data/products.json"; // adjust path

const Page = () => {
  return (
    <div>
      {/* Title */}
      <h1 className="flex justify-center text-6xl mt-24 font-bold items-center text-center">
        <i>Products</i>
      </h1>

      {/* Horizontal line with image */}
      <div className="relative my-10 flex flex-col items-center justify-center">
        <hr className="border-t mt-15 border-gray-300 w-full mb-2" />
      </div>

      {/* Filters + Sorting */}
      <div className="flex justify-between items-center px-10 mb-10">
        <div className="flex items-center space-x-6">
          <p className="font-semibold text-gray-400 text-sm">Filter:</p>
          <div className="flex items-center cursor-pointer text-sm text-gray-700">
            <p className="mr-1">Availability</p>
            <span className="text-xs">▼</span>
          </div>
          <div className="flex items-center cursor-pointer text-sm text-gray-700">
            <p className="mr-1">Price</p>
            <span className="text-xs">▼</span>
          </div>
          <div className="flex items-center cursor-pointer text-sm text-gray-700">
            <p className="mr-1">Color</p>
            <span className="text-xs">▼</span>
          </div>
          <div className="flex items-center cursor-pointer text-sm text-gray-700">
            <p className="mr-1">Brand</p>
            <span className="text-xs">▼</span>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-700 space-x-6">
          <div className="flex items-center cursor-pointer">
            <p className="mr-1">Alphabetically, A-Z</p>
            <span className="text-xs">▼</span>
          </div>
          <p className="text-sm font-semibold text-gray-400">24 products</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="bg-white px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <div key={product.id} className="w-72">
              <Image
                src={product.image}
                alt={product.name}
                width={288}
                height={384}
                className="w-full h-96 object-cover shadow-md"
              />
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">{product.brand}</p>
                <p className="text-sm font-semibold text-gray-800">
                  {product.name}
                </p>
                <p className="text-lg font-bold text-red-600 mt-1">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-5 mt-15">
          <button className="flex justify-center bg-red-600 text-white items-center w-11 h-11 rounded-full border border-gray-300 text-sm hover:bg-gray-200 transition">
            1
          </button>
          <div className="flex justify-center">
            <button className="flex justify-center items-center w-11 h-11 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-200 transition">
              2
            </button>
          </div>
          <div className="flex justify-center">
            <button className="flex justify-center mb-25 items-center bg-white w-11 h-11 rounded-full border border-gray-200 text-sm hover:bg-gray-100 transition">
              <Image
                width="15"
                height="15"
                src="https://img.icons8.com/ios-filled/50/000000/long-arrow-right.png"
                alt="long-arrow-right"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;