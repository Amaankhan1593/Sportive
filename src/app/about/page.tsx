"use client";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* Background video section */}
      <div className="relative h-screen w-full overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          src="https://www.youtube.com/embed/zgfxt4xdp6o?autoplay=1&loop=1&mute=1&controls=0&playlist=zgfxt4xdp6o&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        <div className="relative z-10 text-white flex flex-col items-center text-center justify-center h-full">
          <h1 className="text-5xl font-bold mb-4">OUR STORY</h1>
          <p>
            I believe in comfort. If you don t feel comfortable in your clothes,
            it s hard to think of <br />
            anything else. Even Michelangelo got paid for doing.
          </p>
        </div>
      </div>

      {/* Section below video */}
      <div className="mt-20 text-center">
        <h1 className="text-gray-500 text-sm font-bold">WELCOME TO SPORTIVE</h1>
      </div>
      <div className="mt-5 text-center">
        <h1 className="text-black text-5xl font-bold">
          <i>ONE STORE. SINCE 1930</i>
        </h1>
      </div>
      <div className="mt-10 text-center">
        <p className="text-gray-700 font-bold">
          What started out as a small family business has grown into the largest
          soccer, baseball <br /> and basketball retailer in the world.
        </p>
      </div>

      <div className="flex items-start justify-start p-10">
        <Image
          src="https://habitat-recreation.myshopify.com/cdn/shop/files/s2.jpg?v=1653295670&width=1400"
          alt="Sportive Banner"
          width={600}
          height={500}
          className="mt-5 object-cover"
        />
        <div className="max-w-xl ml-8">
          <h1 className="text-4xl font-bold mt-10 md:mt-40 ml-8">
            <i>CALIFORNIA</i>
          </h1>
          <p className="mt-4 ml-8 text-gray-700">
            Sports bowledem yellow card clutch play, she s on fire. Rugby was
            the winner on the day ruck, game of two halves, alley-oop, ball
            four, take a walk she s on fire. Penalty, he s on fire. Soccer, he s
            on fire. Red card, lineout, baseball. Striker, scrummage, they re
            going upstairs. He shoots, he scores. Strike 3, you re out!
            Baseball, drop goal, corner, trust our processes, rolling maul, slam
            dunk.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden mt-8 py-4">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <span className="marquee-text">
              EXPERIENCE SHOPPING LIKE NEVER BEFORE
            </span>
            <span className="marquee-text">A UNIQUE APPROACH IN SHOPPING</span>
          </div>
        </div>

        <style jsx>{`
          .marquee-wrapper {
            display: flex;
            white-space: nowrap;
          }

          .marquee-track {
            display: flex;
            animation: marquee 20s linear infinite;
          }

          .marquee-text {
            font-size: 7rem;
            font-weight: 600;
            letter-spacing: 0.2em;
            color: transparent;
            -webkit-text-stroke: 2px #e51d1d;
            text-stroke: 2px #e51d1d;
            padding-right: 5rem;
            white-space: nowrap;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

     <div className="flex gap-4">
  <Image
    src="https://habitat-recreation.myshopify.com/cdn/shop/files/s03.jpg?v=1653296924&width=750"
    alt="Image 1"
    width={630}   // smaller width
    height={150}  // smaller height
    className="object-cover ml-10"
  />
  <Image
    src="https://habitat-recreation.myshopify.com/cdn/shop/files/s04.jpg?v=1653296928&width=750"
    alt="Image 2"
    width={630}
    height={150}
    className="object-cover object-top"
  />
</div>

      {/* Browse Collections */}
      <div>
        <h1 className="flex justify-center mt-25 text-4xl font-bold">
          <i>BROWSE OUR COLLECTIONS</i>
        </h1>
        <p className="flex justify-center mt-4 text-lg">
          Add a short description for your brand news
        </p>

        <div className="flex justify-center gap-6 mt-12 px-4">
          <Image
            src="https://habitat-recreation.myshopify.com/cdn/shop/collections/sc6.jpg?v=1653298758"
            alt="High-res Banner"
            width={200}
            height={330}
          />
          <Image
            src="https://habitat-recreation.myshopify.com/cdn/shop/collections/sc1.jpg?v=1653298183"
            alt="Collection 2"
            width={200}
            height={320}
          />
          <Image
            src="https://habitat-recreation.myshopify.com/cdn/shop/collections/sc2.jpg?v=1653298954"
            alt="Collection 3"
            width={200}
            height={320}
          />
          <Image
            src="https://habitat-recreation.myshopify.com/cdn/shop/collections/sc8.jpg?v=1653299194"
            alt="Collection 4"
            width={200}
            height={320}
          />
        </div>
      </div>

      {/* Map + Feedback Section */}
      <section className="text-gray-600 body-font relative mt-20 h-[700px] w-full">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{
              filter: "grayscale(1) contrast(1.2) opacity(0.4)",
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex"></div>
      </section>
    </div>
  );
};

export default Page;
