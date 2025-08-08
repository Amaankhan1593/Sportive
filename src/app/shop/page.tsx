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
        <hr className="border-t border-gray-300 w-full mb-2" />
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

// import React from "react";
// import Image from "next/image";

// const page = () => {
//   return (
//     <div>
//       {/* Title */}
//       <h1 className="flex justify-center text-6xl mt-24 font-bold items-center text-center">
//         <i>Products</i>
//       </h1>

//       {/* Horizontal line with image */}
//       <div className="relative my-10 flex flex-col items-center justify-center">
//         <hr className="border-t border-gray-300 w-full mb-2" />
//       </div>

//       {/* Filters + Sorting */}
//       <div className="flex justify-between items-center px-10 mb-10">
//         <div className="flex items-center space-x-6">
//           <p className="font-semibold text-gray-400 text-sm">Filter:</p>
//           <div className="flex items-center cursor-pointer text-sm text-gray-700">
//             <p className="mr-1">Availability</p>
//             <span className="text-xs">▼</span>
//           </div>
//           <div className="flex items-center cursor-pointer text-sm text-gray-700">
//             <p className="mr-1">Price</p>
//             <span className="text-xs">▼</span>
//           </div>
//           <div className="flex items-center cursor-pointer text-sm text-gray-700">
//             <p className="mr-1">Color</p>
//             <span className="text-xs">▼</span>
//           </div>
//           <div className="flex items-center cursor-pointer text-sm text-gray-700">
//             <p className="mr-1">Brand</p>
//             <span className="text-xs">▼</span>
//           </div>
//         </div>

//         <div className="flex items-center text-sm text-gray-700 space-x-6">
//           <div className="flex items-center cursor-pointer">
//             <p className="mr-1">Alphabetically, A-Z</p>
//             <span className="text-xs">▼</span>
//           </div>
//           <p className="text-sm font-semibold text-gray-400">24 products</p>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="bg-white px-4">
//         <div className="flex flex-wrap justify-center gap-6">
//           {/* Product 1 */}
//           <div className="w-72">
//             <Image src="https://habitat-recreation.myshopify.com/cdn/shop/products/p16.jpg?v=1648537134&width=1220" alt="Product 1" width={288} height={384} className="w-full h-96 object-cover shadow-md" />
//             <div className="mt-3 text-center">
//               <p className="text-sm text-gray-500">Adidas</p>
//               <p className="text-sm font-semibold text-gray-800">Adidas Originals Colorblock Short-Sleeve <br />T-shirt </p>
//               <p className="text-lg font-bold text-red-600 mt-1">$45.00</p>
//             </div>
//           </div>

//           {/* Product 2 */}
//           <div className="w-72">
//             <Image src="https://habitat-recreation.myshopify.com/cdn/shop/products/p3.jpg?v=1648449638&width=1220" alt="Product 2" width={288} height={384} className="w-full h-96 object-cover shadow-md" />
//             <div className="mt-3 text-center">
//               <p className="text-sm text-gray-500">Adidas</p>
//               <p className="text-sm font-semibold text-gray-800">Boys Infant Jordan Jersey Romper</p>
//               <p className="text-lg font-bold text-red-600 mt-1">$30.00</p>
//             </div>
//           </div>

//           {/* Product 3 */}
//           <div className="w-72">
//             <Image src="https://habitat-recreation.myshopify.com/cdn/shop/products/p5.jpg?v=1648453629&width=1160" alt="Product 3" width={288} height={384} className="w-full h-96 object-cover shadow-md" />
//             <div className="mt-3 text-center">
//               <p className="text-sm text-gray-500">Nike</p>
//               <p className="text-sm font-semibold text-gray-800">Graphic Light Support Sports Bra</p>
//               <p className="text-lg font-bold text-red-600 mt-1">From $90.00</p>
//             </div>
//           </div>

//           {/* Product 4 */}
//           <div className="w-72">
//             <Image src="https://habitat-recreation.myshopify.com/cdn/shop/products/p15.jpg?v=1648532451&width=1160" alt="Product 4" width={288} height={384} className="w-full h-96 object-cover shadow-md" />
//             <div className="mt-3 text-center">
//               <p className="text-sm text-gray-500">Nike</p>
//               <p className="text-sm font-semibold text-gray-800">Icon Clash Oversized Houndstooth Crop Top</p>
//               <p className="text-lg font-bold text-red-600 mt-1">$45.00</p>
//             </div>
//           </div>

//           {/* Product 5 */}
//           <div className="w-72">
//             <Image src="https://habitat-recreation.myshopify.com/cdn/shop/products/p21.jpg?v=1648541084&width=1220" alt="Product 5" width={288} height={384} className="w-full h-96 object-cover shadow-md" />
//             <div className="mt-3 text-center">
//               <p className="text-sm text-gray-500">Timberland</p>
//               <p className="text-sm font-semibold text-gray-800">Men s Supply & Demand Corrupt Cargo Pullover Hoodie</p>
//               <p className="text-lg font-bold text-red-600 mt-1">$64.20</p>
//             </div>
//           </div>

//           {/* Product 6 */}
//           <div className="w-72">
//             <Image src="https://habitat-recreation.myshopify.com/cdn/shop/products/p24.jpg?v=1649423711&width=1160" alt="Product 6" width={288} height={384} className="w-full h-96 object-cover shadow-md" />
//             <div className="mt-3 text-center">
//               <p className="text-sm text-gray-500">Adidas</p>
//               <p className="text-sm font-semibold text-gray-800">Mixed Stripe Jersey Polo Shirt</p>
//               <p className="text-lg font-bold text-red-600 mt-1">$110.00</p>
//             </div>
//           </div>

//           {/* Product 7 */}
//           <div className="w-72">
//             <Image src="https://habitat-recreation.myshopify.com/cdn/shop/products/p02.jpg?v=1648449191&width=1160" alt="Product 7" width={288} height={384} className="w-full h-96 object-cover shadow-md" />
//             <div className="mt-3 text-center">
//               <p className="text-sm text-gray-500">New Balance</p>
//               <p className="text-sm font-semibold text-gray-800">Money Basketball Shoes</p>
//               <p className="text-lg font-bold text-red-600 mt-1">$160.00</p>
//             </div>
//           </div>

//           {/* Product 8 */}
//           <div className="w-72">
//             <Image src="https://habitat-recreation.myshopify.com/cdn/shop/products/p22.jpg?v=1648541970&width=1220" alt="Product 8" width={288} height={384} className="w-full h-96 object-cover shadow-md" />
//             <div className="mt-3 text-center">
//               <p className="text-sm text-gray-500">Nike</p>
//               <p className="text-sm font-semibold text-gray-800">Nike Air Force 1 07 Crater Casual Shoes</p>
//               <p className="text-lg font-bold text-red-600 mt-1">$110.00</p>
//             </div>
//           </div>

//           {/* Product 9 */}
//           <div className="w-72">
//             <Image src="https://habitat-recreation.myshopify.com/cdn/shop/products/p7.jpg?v=1648457563&width=1160" alt="Product 9" width={288} height={384} className="w-full h-96 object-cover shadow-md" />
//             <div className="mt-3 text-center">
//               <p className="text-sm text-gray-500">Nike</p>
//               <p className="text-sm font-semibold text-gray-800">Nike Air Max 97 Casual Shoes</p>
//               <p className="text-lg font-bold text-red-600 mt-1">$65.00</p>
//             </div>
//           </div>

//           {/* Product 10 */}
//           <div className="w-72">
//             <Image src="https://habitat-recreation.myshopify.com/cdn/shop/products/p13.jpg?v=1648466608&width=1160" alt="Product 10" width={288} height={384} className="w-full h-96 object-cover shadow-md" />
//             <div className="mt-3 text-center">
//               <p className="text-sm text-gray-500">Nike</p>
//               <p className="text-sm font-semibold text-gray-800">Nike Air Zoom Pegasus 38 Running Shoes</p>
//               <p className="text-lg font-bold text-red-600 mt-1">$120.00</p>
//             </div>
//           </div>

//           {/* Product 11 */}
//           <div className="w-72">
//             <Image src="https://habitat-recreation.myshopify.com/cdn/shop/products/p8.jpg?v=1648460319&width=1220" alt="Product 11" width={288} height={384} className="w-full h-96 object-cover shadow-md" />
//             <div className="mt-3 text-center">
//               <p className="text-sm text-gray-500">Nike</p>
//               <p className="text-sm font-semibold text-gray-800">Nike Aurora Marbled Cropped Tank</p>
//               <p className="text-lg font-bold text-red-600 mt-1">$58.20</p>
//             </div>
//           </div>

//           {/* Product 12 */}
//           <div className="w-72">
//             <Image src="https://habitat-recreation.myshopify.com/cdn/shop/products/p9.jpg?v=1648463255&width=1220" alt="Product 12" width={288} height={384} className="w-full h-96 object-cover shadow-md" />
//             <div className="mt-3 text-center">
//               <p className="text-sm text-gray-500">Nike</p>
//               <p className="text-sm font-semibold text-gray-800">Nike Sportswear Club T-Shirt</p>
//               <p className="text-lg text-red-600 font-bold mt-1">$25.30</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center gap-5 mt-15">
//         <button className="flex justify-center bg-red-600 text-white items-center w-11 h-11 rounded-full border border-gray-300 text-sm hover:bg-gray-200 transition">
//           1
//         </button>
//         <div className="flex justify-center">
//         <button className="flex justify-center items-center w-11 h-11 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-200 transition">
//           2
//         </button>
//       </div>
//      <div className="flex justify-center">
//       <button className="flex justify-center mb-25 items-center bg-white w-11 h-11 rounded-full border border-gray-200 text-sm hover:bg-gray-100 transition">
//         <Image
//           width="15"
//           height="15"
//           src="https://img.icons8.com/ios-filled/50/000000/long-arrow-right.png"
//           alt="long-arrow-right"
//         />
//       </button>
//     </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default page;
