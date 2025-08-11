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

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

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
      <h1 className="text-4xl mb-10 font-bold text-center">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
