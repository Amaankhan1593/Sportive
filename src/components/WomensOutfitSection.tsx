import React from "react";

export default function WomensOutfitSection() {
  return (
    <div className="relative w-full bg-white">
      {/* Title Section */}
      <div className="max-w-[1440px] mx-auto px-6 pt-20 pb-10">
        <h1 className="text-center text-5xl font-bold mb-4 tracking-wide">
          <i>WOMEN'S OUTFITS</i>
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Shop the latest women's sports shoes, runners, sneakers.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-10 items-stretch">
          {/* Left Image + Text */}
          <div className="overflow-hidden shadow-lg group flex flex-col h-[700px]">
            <img
              src="https://habitat-recreation.myshopify.com/cdn/shop/files/img6_22572388-4912-489a-b1af-1e7e0943f40c.jpg?v=1652443090&width=640"
              alt="Main"
              className="w-full h-full object-cover"
            />
            
          </div>

          {/* Right Grid of 4 Products */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                brand: "Reebok",
                name: "Reebok Studio Cropped T-Shirt",
                price: "From $35.00",
                src: "https://habitat-recreation.myshopify.com/cdn/shop/products/p17.jpg?v=1648538959&width=1220"
              },
              {
                brand: "Nike",
                name: "Nike Sportswear Resort Cropped T-Shirt",
                price: "From $35.00",
                src: "https://habitat-recreation.myshopify.com/cdn/shop/products/p11.jpg?v=1648465206&width=1220"
              },
              {
                brand: "Nike",
                name: "Graphic Light Support Sports Bra",
                price: "From $90.00",
                src: "https://habitat-recreation.myshopify.com/cdn/shop/products/p5.jpg?v=1648453629&width=1220"
              },
              {
                brand: "North Face",
                name: "The North Face Long-Sleeve T-Shirt",
                price: "From $32.50",
                src: "https://habitat-recreation.myshopify.com/cdn/shop/products/p18.jpg?v=1648539481&width=1220"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="overflow-hidden    shadow group">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="mt-3 text-center text-sm">
                  <p className="font-semibold">{item.brand}</p>
                  <p className="text-gray-700">{item.name}</p>
                  <p className="text-gray-500">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Full Width Banner Image */}
      <div className="mt-6 relative left-0 w-full z-40">
  {/* Background Image */}
  <img
    src="https://habitat-recreation.myshopify.com/cdn/shop/files/img7.jpg?v=1652443155&width=2520"
    alt="Women's Banner"
    className="w-full h-auto object-cover"
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
  );
}
