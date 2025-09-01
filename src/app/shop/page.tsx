"use client";
import React, { useState } from "react";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { useCart, Product } from "../../../context/CartContext";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  // const handleAddToCart = () => {
  //   addToCart(product, quantity);
  //   setQuantity(1);
  // };

  return (
    <div className="p-4 shadow hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={400}
          className="object-cover mb-4 rounded cursor-pointer"
        />
      </Link>

      <p className="text-sm text-center text-gray-500">{product.brand}</p>
      <h2 className="font-semibold text-center text-sm">{product.name}</h2>
      <p className="text-red-600 text-center font-bold">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
};

const ShopPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-6xl mb-30 mt-10 font-bold text-center">
        <i>Products</i>
      </h1>

      <hr className="border-t-1 border-gray-300 my-4"></hr>
      <div className="flex items-center gap-6">
        <h1 className="text-gray-500 text-sm">Filter:</h1>

        <div className="flex justify-between items-center w-full">
          {/* Left side - Filter options */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Availability</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <span>Price</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <span>Color</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <span>Brand</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Right side - Sorting & Product Count */}
          <div className="flex items-center gap-4">
            <div className="flex text-sm items-center gap-1 cursor-pointer">
              <span>Alphabetically, A-Z</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <span className="text-gray-500">24 products</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-5 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-20">
        <button className="flex bg-red-600 text-white justify-center items-center w-12 h-12 rounded-full border">
          1
        </button>
        <button className="flex justify-center items-center ml-2 w-12 h-12 rounded-full border">
          2
        </button>
        <button className="flex justify-center items-center ml-2 w-12 h-12 rounded-full border">
          -+
        </button>
      </div>
    </div>
  );
};

export default ShopPage;
