import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
      {/* Map Section with Center Pin */}
      <section className="text-gray-600 body-font relative h-[700px] w-full">
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

        {/* Pin Image Centered */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[70%] z-10">
          <Image
            src="https://habitat-recreation.myshopify.com/cdn/shop/t/3/assets/pin.png?v=77387211765185527791652434446"
            alt="Map Pin"
            width={50}
            height={50}
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col justify-center items-center w-full mb-12">
      <h1 className="text-6xl font-bold text-black mb-4"><i>Contact</i></h1>
    </div>

    {/* Flex container for form and address */}
    <div className="flex flex-col lg:flex-row gap-10 w-full">
      {/* Form */}
      <div className="w-full lg:w-2/3">
        <div className="flex flex-wrap -mx-2">
          {/* Name */}
          <div className="p-2 w-full sm:w-1/2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-opacity-50 rounded border py-2 px-3 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Email */}
          <div className="p-2 w-full sm:w-1/2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Phone Number */}
          <div className="p-2 w-full">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Comment */}
          <div className="p-2 w-full">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Comment</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="p-2 w-full">
            <button className="rounded-full w-full text-white text-sm bg-black border-0 py-3 font-semibold px-8 focus:outline-none">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>

      {/* Address + Office Info */}
      <div className="w-full lg:w-1/3 text-gray-800 text-sm leading-relaxed space-y-6">
        <div>
          <h2 className="font-bold text-lg mt-7 ml-6 mb-1">General Office</h2>
          <p className='ml-6'>
            6100 Wilshire Blvd 2nd Floor
            Los Angeles <br /> CA 9004
            +1 310 499 7700
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg ml-6 mb-1">Store Hours</h2>
          <p className='ml-6'>
            Monday-Saturday 11am–7pm ET<br />
            Sunday 11am–6pm ET
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default page
