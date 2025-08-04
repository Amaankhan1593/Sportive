import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
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
        <div className="container mx-auto flex flex-wrap items-center justify-between px-1 py-4">
          {/* Navigation Menu */}
          <nav className="hidden lg:flex flex-wrap text-gray-600 items-center text-base space-x-6">
            <Link href={'/'} className="cursor-pointer hover:text-red-500">Home</Link>
            <Link href={'/shop'} className="cursor-pointer hover:text-red-500">Shop</Link>
            <Link href={'/news'} className="cursor-pointer hover:text-red-500">News</Link>
            <Link href={'/about'} className="cursor-pointer hover:text-red-500">About</Link>
            <Link href={'/contact'} className="cursor-pointer hover:text-red-500">Contact</Link>
          </nav>

          {/* Logo */}
          <a className="flex title-font font-medium mr-50 items-center text-gray-900">
            <Image
          className="w-50"
          src="https://habitat-recreation.myshopify.com/cdn/shop/files/logo2x_4ab34736-74d3-4274-b3c0-9f16dfd114ec.png?v=1653466069"
          alt="Logo"
          width={180}     // or whatever size suits you
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
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            >
            <path d="M4.42858 4.45C4.12482 4.45 3.87858 4.69624 3.87858 5C3.87858 5.30376 4.12482 5.55 4.42858 5.55V4.45ZM22.3714 5L22.9003 5.1511C22.9477 4.98515 22.9145 4.80658 22.8105 4.66879C22.7066 4.53101 22.544 4.45 22.3714 4.45V5ZM19.7316 14.2396L20.2604 14.3907L19.7316 14.2396ZM18.1931 15.4V15.95V15.4ZM8.60688 15.4V15.95V15.4ZM7.06844 14.2396L6.53961 14.3907L7.06844 14.2396ZM3.45149 1.58022L3.98033 1.42913V1.42913L3.45149 1.58022ZM2.68227 1L2.68227 0.45H2.68227V1ZM1 0.45C0.696243 0.45 0.45 0.696243 0.45 1C0.45 1.30376 0.696243 1.55 1 1.55V0.45ZM9.25 19.4C9.25 19.9799 8.7799 20.45 8.2 20.45V21.55C9.38741 21.55 10.35 20.5874 10.35 19.4H9.25ZM8.2 20.45C7.6201 20.45 7.15 19.9799 7.15 19.4H6.05C6.05 20.5874 7.01259 21.55 8.2 21.55V20.45ZM7.15 19.4C7.15 18.8201 7.6201 18.35 8.2 18.35V17.25C7.01259 17.25 6.05 18.2126 6.05 19.4H7.15ZM8.2 18.35C8.7799 18.35 9.25 18.8201 9.25 19.4H10.35C10.35 18.2126 9.38741 17.25 8.2 17.25V18.35ZM19.65 19.4C19.65 19.9799 19.1799 20.45 18.6 20.45V21.55C19.7874 21.55 20.75 20.5874 20.75 19.4H19.65ZM18.6 20.45C18.0201 20.45 17.55 19.9799 17.55 19.4H16.45C16.45 20.5874 17.4126 21.55 18.6 21.55V20.45ZM17.55 19.4C17.55 18.8201 18.0201 18.35 18.6 18.35V17.25C17.4126 17.25 16.45 18.2126 16.45 19.4H17.55ZM18.6 18.35C19.1799 18.35 19.65 18.8201 19.65 19.4H20.75C20.75 18.2126 19.7874 17.25 18.6 17.25V18.35ZM4.42858 5.55H22.3714V4.45H4.42858V5.55ZM21.8426 4.8489L19.2027 14.0885L20.2604 14.3907L22.9003 5.1511L21.8426 4.8489ZM19.2027 14.0885C19.14 14.3079 19.0076 14.5009 18.8254 14.6383L19.4878 15.5164C19.8608 15.2351 20.132 14.8399 20.2604 14.3907L19.2027 14.0885ZM18.8254 14.6383C18.6433 14.7757 18.4213 14.85 18.1931 14.85V15.95C18.6603 15.95 19.1148 15.7978 19.4878 15.5164L18.8254 14.6383ZM18.1931 14.85H8.60688V15.95H18.1931V14.85ZM8.60688 14.85C8.37871 14.85 8.15674 14.7757 7.97458 14.6383L7.31216 15.5164C7.68516 15.7978 8.13967 15.95 8.60688 15.95V14.85ZM7.97458 14.6383C7.79241 14.5009 7.65997 14.3079 7.59728 14.0885L6.53961 14.3907C6.66796 14.8399 6.93916 15.2351 7.31216 15.5164L7.97458 14.6383ZM7.59728 14.0885L3.98033 1.42913L2.92265 1.73132L6.53961 14.3907L7.59728 14.0885ZM3.98033 1.42913C3.89974 1.14705 3.72945 0.898895 3.49524 0.72223L2.83282 1.60041C2.87619 1.63313 2.90773 1.67908 2.92265 1.73132L3.98033 1.42913ZM3.49524 0.72223C3.26103 0.545564 2.97564 0.45 2.68227 0.45L2.68227 1.55C2.7366 1.55 2.78945 1.5677 2.83282 1.60041L3.49524 0.72223ZM2.68227 0.45H1V1.55H2.68227V0.45Z" />
        </svg>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
