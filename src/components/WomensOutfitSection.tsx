import React from "react";
import Image from "next/image";

export default function WomensOutfitSection() {
  return (
    <div className="relative w-full bg-white">
      {/* Title Section */}
      <div className="max-w-[1440px] mx-auto px-6 pt-20 pb-10">
        <h1 className="text-center text-5xl font-bold mb-4 tracking-wide">
          <i>WOMEN S OUTFITS</i>
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Shop the latest women s sports shoes, runners, sneakers.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-10 items-stretch">
          {/* Left Image */}
          <div className="overflow-hidden shadow-lg flex flex-col h-[700px]">
            <Image
              src="https://habitat-recreation.myshopify.com/cdn/shop/files/img6_22572388-4912-489a-b1af-1e7e0943f40c.jpg?v=1652443090&width=640"
              alt="Main"
              width={640}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Grid of 4 Products (Static) */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <div className="overflow-hidden shadow">
                <Image
                  src="https://habitat-recreation.myshopify.com/cdn/shop/products/p17.jpg?v=1648538959&width=1220"
                  alt="Reebok Studio Cropped T-Shirt"
                  width={600}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="mt-3 text-center text-sm">
                <p className="font-semibold">Reebok</p>
                <p className="text-gray-700">Reebok Studio Cropped T-Shirt</p>
                <p className="text-gray-500">From $35.00</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="overflow-hidden shadow">
                <Image
                  src="https://habitat-recreation.myshopify.com/cdn/shop/products/p11.jpg?v=1648465206&width=1220"
                  alt="Nike Sportswear Resort Cropped T-Shirt"
                  width={600}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="mt-3 text-center text-sm">
                <p className="font-semibold">Nike</p>
                <p className="text-gray-700">
                  Nike Sportswear Resort Cropped T-Shirt
                </p>
                <p className="text-gray-500">From $35.00</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="overflow-hidden shadow">
                <Image
                  src="https://habitat-recreation.myshopify.com/cdn/shop/products/p5.jpg?v=1648453629&width=1220"
                  alt="Graphic Light Support Sports Bra"
                  width={600}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="mt-3 text-center text-sm">
                <p className="font-semibold">Nike</p>
                <p className="text-gray-700">
                  Graphic Light Support Sports Bra
                </p>
                <p className="text-gray-500">From $90.00</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="overflow-hidden shadow">
                <Image
                  src="https://habitat-recreation.myshopify.com/cdn/shop/products/p18.jpg?v=1648539481&width=1220"
                  alt="The North Face Long-Sleeve T-Shirt"
                  width={600}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="mt-3 text-center text-sm">
                <p className="font-semibold">North Face</p>
                <p className="text-gray-700">
                  The North Face Long-Sleeve T-Shirt
                </p>
                <p className="text-gray-500">From $32.50</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Banner Image */}
      import Image from "next/image";

<div className="mt-6 relative left-0 w-full z-40">
  {/* Background Image */}
  <div className="relative w-full h-[500px]">
    <Image
      src="https://habitat-recreation.myshopify.com/cdn/shop/files/img7.jpg?v=1652443155&width=2520"
      alt="Women's Banner"
      fill
      className="object-cover"
    />

    {/* Centered Text Overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-white text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold">OUR STORY</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Sports bowledem yellow card clutch play, shes on fire rugby was the winner on the
          day ruck game of two halves alleyoop ball four take a walk shes on fire.
        </p>
        <div className="mt-5 flex justify-center">
          <button
            className="rounded-full text-sm font-semibold bg-white text-black hover:bg-black hover:text-white border shadow px-6 py-4 transition-colors duration-200"
            type="button"
            aria-label="Shop Best Sellers"
          >
            ABOUT US
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
