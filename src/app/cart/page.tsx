"use client";

import React from "react";
import { useCart } from "../../../context/CartContext";
import Image from "next/image";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0)
    return <div className="text-center mt-10 text-xl">Your cart is empty.</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-6 font-bold">Shopping Cart</h1>

      {cartItems.map(({ id, name, price, quantity, image }) => (
        <div
          key={id}
          className="flex items-center justify-between border-b py-4"
        >
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="rounded cursor-pointer"
          />
          <div className="flex-1 ml-4">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p>${price.toFixed(2)}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => updateQuantity(id, -1)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => updateQuantity(id, 1)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeFromCart(id)}
            className="text-red-600 hover:underline ml-4"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={clearCart}
        className="mt-6 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartPage;
