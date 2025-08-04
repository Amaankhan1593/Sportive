'use client';
import React from "react";
import Image from "next/image";

const Store = () => {
  return (
    <div>
      <h1 className="text-center mt-20 text-4xl font-bold mb-4 tracking-wide">
        <i>FREE IN-STORE PICK UP</i>
      </h1>
      <p className="text-center text-md text-gray-600 mb-12">
        Most items available at your local store will be ready in just two hours
        if your order is <br /> placed before 7pm local time.
      </p>

      <div className="mt-5 flex justify-center">
        <button
          className="rounded-full text-sm font-semibold bg-white text-black hover:bg-black hover:text-white border shadow px-6 py-4 transition-colors duration-200"
          type="button"
          aria-label="Learn More"
        >
          LEARN MORE
        </button>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {/* Left card */}
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="h-110 overflow-hidden relative w-full" style={{ height: '28rem' }}>
                <Image
                  src="https://habitat-recreation.myshopify.com/cdn/shop/files/img8.jpg?v=1652443702&width=814"
                  alt="Celebrate Softness"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <h2 className="title-font text-3xl font-bold text-black mt-6 mb-3">
                <i>CELEBRATE SOFTNESS</i>
              </h2>
              <p className="leading-relaxed text-black text-lg">
                Continue your health journey by integrating healthy habits with
                our easy-to-use & top-rated tech accessories.
              </p>
              <button className="flex mx-auto mt-3 text-black shadow hover:text-red-600 font-semibold cursor-pointer transition duration-300">
                SHOP ACCESSORIES
              </button>
            </div>

            {/* Right card */}
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="h-110 overflow-hidden relative w-full" style={{ height: '28rem' }}>
                <Image
                  src="https://habitat-recreation.myshopify.com/cdn/shop/files/img9.jpg?v=1652443702&width=814"
                  alt="Cycling Clothing"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <h2 className="title-font text-3xl font-bold text-black mt-6 mb-3">
                <i>CYCLING CLOTHING</i>
              </h2>
              <p className="leading-relaxed text-black text-lg">
                From tops to sculpting leggings, Decathlon has a full range of
                clothing designed to streamline your body & wick away moisture.
              </p>
              <button className="flex mx-auto mt-3 shadow text-black hover:text-red-600 font-semibold cursor-pointer transition duration-300">
                SHOP CYCLING
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr className="mt-3 border-t border-gray-300 w-full mx-auto" />
    </div>
  );
};

export default Store;
