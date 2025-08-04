import React from "react";
import Image from "next/image";

export default function TopBrands() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-16">
      <h1 className="text-center text-4xl mt-15 font-extrabold mb-4 tracking-wide">
        <i>OUR TOP BRANDS</i>
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Shop from all the top sports and fashion brands.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10">
        <div className="w-[180px] h-[90px] flex items-center justify-center relative">
          <Image
            src="https://habitat-recreation.myshopify.com/cdn/shop/files/client01_10728085-7e28-4d8f-aafe-417e475d06a1.png?v=1652447447&width=400"
            alt="Brand 1"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100px, 180px"
          />
        </div>
        <div className="w-[180px] h-[90px] flex items-center justify-center relative">
          <Image
            src="https://habitat-recreation.myshopify.com/cdn/shop/files/client02_743bc671-4883-41b1-b7d1-139530bd78d7.png?v=1652447447&width=400"
            alt="Brand 2"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100px, 180px"
          />
        </div>
        <div className="w-[180px] h-[90px] flex items-center justify-center relative">
          <Image
            src="https://habitat-recreation.myshopify.com/cdn/shop/files/client03_d0b583bd-8852-4f9e-a01d-5322b8bcf980.png?v=1652447447&width=400"
            alt="Brand 3"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100px, 180px"
          />
        </div>
        <div className="w-[180px] h-[90px] flex items-center justify-center relative">
          <Image
            src="https://habitat-recreation.myshopify.com/cdn/shop/files/client04_e214f5fd-f86c-4ce5-b696-c655ee1e8b70.png?v=1652447447&width=400"
            alt="Brand 4"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100px, 180px"
          />
        </div>
        <div className="w-[180px] h-[90px] flex items-center justify-center relative">
          <Image
            src="https://habitat-recreation.myshopify.com/cdn/shop/files/client05_83ff724a-c887-4bf1-bc5b-5958e93f7f7a.png?v=1652447447&width=400"
            alt="Brand 5"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100px, 180px"
          />
        </div>
      </div>
    </div>
  );
}
