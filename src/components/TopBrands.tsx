import React from "react";

export default function TopBrands() {
  const logos = [
    "https://habitat-recreation.myshopify.com/cdn/shop/files/client01_10728085-7e28-4d8f-aafe-417e475d06a1.png?v=1652447447&width=400",
    "https://habitat-recreation.myshopify.com/cdn/shop/files/client02_743bc671-4883-41b1-b7d1-139530bd78d7.png?v=1652447447&width=400",
    "https://habitat-recreation.myshopify.com/cdn/shop/files/client03_d0b583bd-8852-4f9e-a01d-5322b8bcf980.png?v=1652447447&width=400",
    "https://habitat-recreation.myshopify.com/cdn/shop/files/client04_e214f5fd-f86c-4ce5-b696-c655ee1e8b70.png?v=1652447447&width=400",
    "https://habitat-recreation.myshopify.com/cdn/shop/files/client05_83ff724a-c887-4bf1-bc5b-5958e93f7f7a.png?v=1652447447&width=400",
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-16">
      <h1 className="text-center text-4xl mt-15 font-extrabold mb-4 tracking-wide">
        <i>OUR TOP BRANDS</i>
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Shop from all the top sports and fashion brands.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {logos.map((src, idx) => (
          <div key={idx} className="w-45 h-30 flex items-center justify-center">
            <img
              src={src}
              alt={`Brand ${idx + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
