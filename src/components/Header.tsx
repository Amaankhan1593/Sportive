"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div>
      {/* Top bar */}
      <div className="flex bg-black text-white text-sm items-center justify-between px-6 py-2 relative">
        <h1 className="text-center w-full">
          FREE SHIPPING ON ALL ORDERS OVER $40
        </h1>

        <div className="flex space-x-2 absolute right-6 text-white items-center">
          <p>ENGLISH</p>
          <Image
            width="16"
            height="16"
            src="https://img.icons8.com/material-outlined/24/ffffff/expand-arrow--v1.png"
            alt="expand"
          />
          <p>UNITED STATES (USD $)</p>
          <Image
            width="16"
            height="16"
            src="https://img.icons8.com/material-outlined/24/ffffff/expand-arrow--v1.png"
            alt="expand"
          />
        </div>
      </div>

      {/* Navbar */}
      <header className="text-gray-600 body-font sticky top-0 z-50  bg-white shadow-md w-full">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-1 py-7">
          {/* Navigation Menu */}
          <nav className="hidden lg:flex flex-wrap text-gray-600 items-center text-base space-x-6">
            <Link href={"/"} className="cursor-pointer hover:text-red-500">
              Home
            </Link>
            <Link href={"/shop"} className="cursor-pointer hover:text-red-500">
              Shop
            </Link>
            <Link href={"/news"} className="cursor-pointer hover:text-red-500">
              News
            </Link>
            <Link href={"/about"} className="cursor-pointer hover:text-red-500">
              About
            </Link>
            <Link
              href={"/contact"}
              className="cursor-pointer hover:text-red-500"
            >
              Contact
            </Link>
          </nav>

          {/* Logo */}
          <a className="flex title-font font-medium mr-50 items-center text-gray-900">
            <Image
              className="w-50"
              src="https://habitat-recreation.myshopify.com/cdn/shop/files/logo2x_4ab34736-74d3-4274-b3c0-9f16dfd114ec.png?v=1653466069"
              alt="Logo"
              width={180} // or whatever size suits you
              height={50}
            />
          </a>

          {/* Icons */}
          <div className="inline-flex space-x-4 lg:justify-end">
            {/* Search */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 13.5L17.7495 18.5M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" />
            </svg>

            {/* User */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 21"
              fill="currentColor"
            >
              <path d="M9.3486 1C15.5436 1 15.5436 10.4387 9.3486 10.4387C3.15362 10.4387 3.15362 1 9.3486 1ZM1 19.9202C1.6647 9.36485 17.4579 9.31167 18.0694 19.9468L17.0857 20C16.5539 10.6145 2.56869 10.6411 2.01034 19.9734L1.02659 19.9202H1ZM9.3486 2.01034C4.45643 2.01034 4.45643 9.42836 9.3486 9.42836C14.2408 9.42836 14.2408 2.01034 9.3486 2.01034Z" />
            </svg>

            {/* Cart */}
            <IoCartOutline
              className="w-6 h-6 cursor-pointer"
              onClick={openCart}
            />
          </div>
        </div>
      </header>
      {/* Cart Drawer */}
      {isCartOpen && (
        <>
          {/* Transparent blur overlay */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={closeCart}
          ></div>

          {/* Cart */}
          <div className="fixed top-0 right-0 w-130 h-full bg-white shadow-lg p-4 z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">
                <i>Cart</i>
              </h2>
              <button onClick={closeCart} className="px-3 py-1 text-sm">
                Close
              </button>
            </div>
            <hr className="border-gray-300 mb-4" />
            {/* Example cart items */}
            <div className="flex flex-col items-center justify-center h-screen">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="-mt-40"
              >
                <path
                  d="M63.2133 82.0001C58.4983 82.0001 54.6765 78.1637 54.6765 73.4633C54.6765 68.7483 58.5129 64.9265 63.2133 64.9265C67.9137 64.9265 71.7501 68.7629 71.7501 73.4633C71.7501 78.1637 67.9137 82.0001 63.2133 82.0001ZM63.2133 68.3383C60.3872 68.3383 58.0883 70.6372 58.0883 73.4633C58.0883 76.2894 60.3872 78.5883 63.2133 78.5883C66.0394 78.5883 68.3383 76.2894 68.3383 73.4633C68.3383 70.6372 66.0394 68.3383 63.2133 68.3383ZM29.0368 82.0001C24.3218 82.0001 20.5 78.1637 20.5 73.4633C20.5 68.7483 24.3364 64.9265 29.0368 64.9265C33.7372 64.9265 37.5736 68.7629 37.5736 73.4633C37.5882 78.1637 33.7518 82.0001 29.0368 82.0001ZM29.0368 68.3383C26.2107 68.3383 23.9118 70.6372 23.9118 73.4633C23.9118 76.2894 26.2107 78.5883 29.0368 78.5883C31.8629 78.5883 34.1618 76.2894 34.1618 73.4633C34.1618 70.6372 31.8629 68.3383 29.0368 68.3383ZM70.0368 61.4999H30.6036C24.9221 61.4999 20.0021 57.4585 18.8746 51.8942L10.5575 10.2499H1.71321C0.761429 10.2499 0 9.48849 0 8.5367C0 7.59956 0.761429 6.82349 1.71321 6.82349H11.9632C12.7832 6.82349 13.4714 7.39456 13.6325 8.19991L22.2425 51.206C23.0332 55.1888 26.5621 58.0735 30.6182 58.0735H70.0514C70.9886 58.0735 71.7646 58.8349 71.7646 59.7867C71.75 60.7385 70.9886 61.4999 70.0368 61.4999ZM67.4304 47.8383H20.5001C19.5629 47.8383 18.7869 47.0768 18.7869 46.125C18.7869 45.1733 19.5483 44.4118 20.5001 44.4118H67.4304C70.0076 44.4118 72.204 42.479 72.5115 39.9165C72.6286 38.9793 73.5365 38.3204 74.4151 38.4376C75.3522 38.5547 76.0111 39.404 75.894 40.3411C75.3668 44.6168 71.7208 47.8383 67.4304 47.8383ZM39.2869 20.4999H15.3751C14.4379 20.4999 13.6619 19.7385 13.6619 18.7867C13.6619 17.8496 14.4233 17.0735 15.3751 17.0735H39.2869C40.224 17.0735 41.0001 17.8349 41.0001 18.7867C41.0001 19.7385 40.2386 20.4999 39.2869 20.4999ZM63.2133 37.5882C52.8608 37.5882 44.4265 29.1539 44.4265 18.8014C44.4265 8.44893 52.8462 0 63.2133 0C73.5658 0 82.0001 8.43429 82.0001 18.7868C82.0001 29.1393 73.5658 37.5882 63.2133 37.5882ZM63.2133 3.41179C54.7351 3.41179 47.8383 10.3086 47.8383 18.7868C47.8383 27.265 54.7351 34.1618 63.2133 34.1618C71.6915 34.1618 78.5883 27.265 78.5883 18.7868C78.5883 10.3086 71.6915 3.41179 63.2133 3.41179ZM70.0368 27.3382C69.5976 27.3382 69.1583 27.1771 68.8215 26.8404L55.1597 13.1786C54.4861 12.505 54.4861 11.4361 55.1597 10.7625C55.8333 10.0889 56.9022 10.0889 57.5758 10.7625L71.2376 24.4243C71.9111 25.0979 71.9111 26.1668 71.2376 26.8404C70.9154 27.1625 70.4761 27.3382 70.0368 27.3382ZM56.3751 27.3382C55.9358 27.3382 55.4965 27.1771 55.1597 26.8404C54.4861 26.1668 54.4861 25.0979 55.1597 24.4243L68.8215 10.7625C69.4951 10.0889 70.564 10.0889 71.2376 10.7625C71.9111 11.4361 71.9111 12.505 71.2376 13.1786L57.5758 26.8404C57.2536 27.1625 56.8144 27.3382 56.3751 27.3382Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-center mt-3 text-lg">
                Your cart is currently empty.
              </p>
              <div>
                <a href="/shop">
                  <button className="cursor-pointer rounded-full border px-7 py-3 text-white mt-4 bg-[#E51D1D]">
                    START SHOPPING
                  </button>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
