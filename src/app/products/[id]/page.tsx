"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import products from "../../../data/products.json";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCart, Product } from "../../../../context/CartContext";

const ProductDetail: React.FC = () => {
  const params = useParams();
  const productId = Number(params.id);

  const product = products.find((p) => p.id === productId) as
    | Product
    | undefined;

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>("gray");
  const [selectedSize, setSelectedSize] = useState<string>("M");

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  // Quantity increase/decrease handlers (same logic as ShopPage)
  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  // Add to cart handler (reset quantity after adding)
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt={product.name}
            src={product.image}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            width={400}
            height={400}
          />

          <div className="lg:w-1/2 w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.brand}
            </h2>
            <h1 className="text-gray-900 text-4xl mt-3 title-font font-medium mb-1">
              {product.name}
            </h1>
            <span className="title-font font-medium mt-3 text-xl text-red-600">
              ${product.price.toFixed(2)}
            </span>

            {/* Color selector */}
            <div className="mb-4">
              <span className="block mb-1 font-medium mt-10 text-gray-700">
                Color:{" "}
                {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
              </span>
              <div className="flex space-x-2 mt-3 ml-1">
                {["gray"].map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`border-2 rounded-full w-8 h-8 focus:outline-none ${
                      color === selectedColor
                        ? "border-indigo-600"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor:
                        color === "gray"
                          ? "#9CA3AF"
                          : color === "black"
                          ? "#111827"
                          : "#4F46E5",
                    }}
                    aria-label={`Select color ${color}`}
                  />
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-6">
              <span className="block mb-2 text-sm">Size: {selectedSize}</span>
              <div className="flex space-x-3">
                {["S", "M", "L"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`border rounded-md px-5 py-3 font-semibold focus:outline-none ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-100"
                    }`}
                    aria-label={`Select size ${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="text-sm underline text-black mb-2">
                Sizing guide
              </div>

              {/* Quantity selector and Add to Cart button container */}
              <div className="flex items-center space-x-4">
                {/* Quantity selector */}
                <div className="flex items-center border rounded w-25">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="w-10 h-10 flex justify-center items-center text-2xl font-bold hover:bg-gray-200"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>

                  <div className="flex-grow text-center font-semibold text-lg">
                    {quantity}
                  </div>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="w-10 h-10 flex justify-center items-center text-xl font-bold hover:bg-gray-200"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="bg-black w-full  text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>

              {/* Buy It Now Button */}
              <button
                type="button"
                onClick={async () => {
                  try {
                    const res = await fetch("/api/checkout", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        currency: "usd", // change if needed
                        items: [
                          {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            quantity,
                            image: product.image,
                          },
                        ],
                      }),
                    });

                    const data = await res.json();
                    if (data?.url) window.location.href = data.url;
                    else alert(data?.error || "Unable to start checkout");
                  } catch {
                    alert("Something went wrong starting checkout");
                  }
                }}
                className="mt-4 w-full cursor-pointer bg-red-600 text-white px-6 py-3 rounded-full"
              >
                Buy It Now
              </button>

              {/* Additional text below Buy It Now */}
              <div className="mt-8 text-gray-700 space-y-3 text-sm">
                <p>
                  <strong>Pickup available at 827 North Coronado</strong>
                </p>
                <p>Usually ready in 24 hours</p>
                <p className="underline text-black cursor-pointer">
                  View store information
                </p>

                <hr className="my-1 border-gray-300" />
                <p className="mt-6">
                  Pulling from the Three Stripes design archive, the Men’s
                  adidas Originals Adicolor Colorblock Short-Sleeve T-Shirt
                  features a relaxed fit, bold colorblocking and a partial
                  Trefoil design for a sporty finishing touch.
                </p>

                <p className="mt-4">
                  This is a demo store. You can purchase products like this from
                  Finishline.
                </p>
              </div>
              <hr className="my-1 mt-5 border-gray-300" />
            </div>
          </div>

          {/* Accordions */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="ml-140 -mt-5">
                MATERIALS
              </AccordionTrigger>
              <AccordionContent className="ml-140">
                Talk about fine lines and great curves. That’s the beauty of the
                Darcy sofa—made to suit your appreciation for clean,
                contemporary style. A striking flared frame, comfy pillow top
                armrests and an ultra-soft upholstery that holds up to everyday
                living complete this fashion statement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <hr className="my-1 mt-5 border-gray-300" />

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="ml-140 -mt-5">
                SHIPPING & RETURNS
              </AccordionTrigger>
              <AccordionContent className="ml-140">
                All furniture is thoroughly inspected at several key points in
                our preparation and delivery process to make sure it’s received
                in good condition. If you have chosen to pick up your order from
                one of our showrooms, we encourage you to inspect your item
                before you take possession.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <hr className="my-1 mt-5 border-gray-300" />

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="ml-140 -mt-5">
                CARE GUIDE
              </AccordionTrigger>
              <AccordionContent className="ml-140">
                Regular care. Use a slightly damp, soft and lint-free cloth for
                regular dust removal. Always clean in the direction of the
                grain.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
