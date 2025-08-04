import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Promo Bar */}
      <div className="bg-red-600 px-4 py-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center px-2 gap-4">
          <h1 className="text-2xl font-bold text-center md:text-left">
            Your fave furniture, for less. Save up to 20% on selected furniture.
          </h1>
          <button
            className="rounded-full text-sm font-semibold text-white hover:bg-white border-white hover:text-black border shadow px-6 py-4 transition-colors duration-200"
            type="button"
            aria-label="Shop For Sale"
          >
            SHOP FOR SALE
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left Section: Logo + Text */}
          <div className="md:w-1/2">
            <div className="mb-6">
              <Image
              src="https://habitat-recreation.myshopify.com/cdn/shop/files/logo-footer.png?v=1653466142&width=224"
              alt="Habitat Footer Logo"
              width={224} // You must provide width
              height={50} // Adjust height as needed
              className="ml-2"
            />
            </div>

            <p className="text-gray-400 ml-2 leading-relaxed">
              Success isnt about the end result, its about what you learn
              along the way. <br />
              In a meat-eating world, wearing leather for shoes and clothes and
              even handbags, <br />
              the discussion of fur is childish.
            </p>
            <p className="mt-6 ml-2 underline cursor-pointer font-semibold">
              Learn More
            </p>
          </div>

          {/* Right Section: Lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 md:mt-0 text-sm md:w-1/2 md:pl-16">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold text-gray-400 mb-3">COMPANY</h3>
              <ul className="space-y-3  text-white">
                <li className="hover:text-red-500 cursor-pointer">Home</li>
                <li className="hover:text-red-500 cursor-pointer">Shop</li>
                <li className="hover:text-red-500 cursor-pointer">News</li>
                <li className="hover:text-red-500 cursor-pointer">About</li>
                <li className="hover:text-red-500 cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-gray-400 mb-3">HELP</h3>
              <ul className="space-y-3 text-white">
                <li className="hover:text-red-500 cursor-pointer">Home</li>
                <li className="hover:text-red-500 cursor-pointer">Shop</li>
                <li className="hover:text-red-500 cursor-pointer">News</li>
                <li className="hover:text-red-500 cursor-pointer">About</li>
                <li className="hover:text-red-500 cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold text-gray-400 mb-3">GET IN TOUCH</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-red-500 cursor-pointer flex items-center gap-2">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"  // or use fill="currentColor" and className="w-4 h-4 text-white"
                  viewBox="0 0 16 16"
                  className="w-4 h-4"
                >
                  <path d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z" />
                </svg>

                  Facebook
                </li>

                <li className="hover:text-red-500 cursor-pointer flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 30 30"
                    className="w-4 h-4"
                  >
                    <path d="M30 15c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15Zm-8.427-7h-2.375l-3.914 4.473L11.901 8H7l5.856 7.657L7.306 22h2.376l4.284-4.894L17.709 22h4.78l-6.105-8.07L21.573 8ZM19.68 20.578h-1.316L9.774 9.347h1.412l8.494 11.231Z" />
                  </svg>
                  Twitter
                </li>

                <li className="hover:text-red-500 cursor-pointer flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 18 18"
                    className="w-4 h-4"
                  >
                    <path d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z" />
                  </svg>
                  Instagram
                </li>

                <li className="hover:text-red-500 cursor-pointer flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 100 100"
                    className="w-4 h-4"
                  >
                    <path d="M98 11c2 7.7 2 24 2 24s0 16.3-2 24a12.5 12.5 0 01-9 9c-7.7 2-39 2-39 2s-31.3 0-39-2a12.5 12.5 0 01-9-9c-2-7.7-2-24-2-24s0-16.3 2-24c1.2-4.4 4.6-7.8 9-9 7.7-2 39-2 39-2s31.3 0 39 2c4.4 1.2 7.8 4.6 9 9zM40 50l26-15-26-15v30z" />
                  </svg>
                  YouTube
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright & Language Buttons */}
        <div className="mt-16 ml-2">
          <p className="text-gray-400 text-sm">
            © 2025 Habitat - Recreation, All rights reserved.{" "}
            <span className="underline cursor-pointer">Powered by Shopify</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <button className="flex items-center gap-1 text-gray-500 text-sm px-3 py-1.5 border border-white rounded hover:bg-gray-800">
              English
              <Image
                width="16"
                height="16"
                src="https://img.icons8.com/material-outlined/24/ffffff/expand-arrow--v1.png"
                alt="expand"
              />
            </button>

            <button className="flex items-center gap-2 text-gray-500 text-sm px-3 py-1.5 border border-white rounded hover:bg-gray-800">
              United States (USD $)
              <Image
                width="16"
                height="16"
                src="https://img.icons8.com/material-outlined/24/ffffff/expand-arrow--v1.png"
                alt="expand"
              />
            </button>
          </div>
         </div>
      </footer>
    </div>
  );
};

export default Footer;
