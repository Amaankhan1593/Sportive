import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="text-center mt-24">
      <div className="fixed top-20 left-10 mt-12 z-50">
  <h1 className="text-gray-700 text-sm">Home / News</h1>
</div> 
      <h1 className="font-bold text-6xl"><i>Blog Posts</i></h1>
      <p className="text-gray-600 font-semibold text-2xl mt-4"><i>August 05, 2025</i></p>

      <hr className="mt-12 mb-5 border border-gray-200 w-full mx-auto" />
      <div className="flex ml-160 items-center cursor-pointer text-sm text-gray-700">
        <p className="mr-4 text-red-600 text-2xl">All</p>
        <span style={{ fontSize: "0.6rem", color: "red" }}>▼</span>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            
            {/* Card 1 */}
            <div className="p-4 md:w-1/3">
              <div className="border-2 border-gray-200 border-opacity-60 overflow-hidden">
                <Image
                  src="https://habitat-recreation.myshopify.com/cdn/shop/articles/rb5.jpg?v=1648553532&width=1060"
                  alt="blog"
                  width={1060}
                  height={500}
                  className="w-full object-cover object-top"
                />
              </div>
              <div>
                <p className='mt-8'>March 29 2022</p>
                <h1 className='mt-4 text-black font-bold text-xl'>
                  Individualise your training plan even <br /> more with our on-demand classes
                </h1>
                <p className='mt-2 text-black font-bold text-sm'>
                  Money is the most corrosive aspect of life today because it means that all attention to detail is forgotten. Luxury must be comfortable, otherwise it is not luxury. There is...
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 md:w-1/3">
              <div className="border-2 border-gray-200 border-opacity-60 overflow-hidden">
                <Image
                  src="https://habitat-recreation.myshopify.com/cdn/shop/articles/rb4.jpg?v=1648553355&width=1060"
                  alt="blog"
                  width={1060}
                  height={500}
                  className="w-full object-cover object-top"
                />
              </div>
              <div>
                <p className='mt-8'>March 29 2022</p>
                <h1 className='mt-4 text-black font-bold text-xl italic'>
                  Workout in the heat: how to train in high temperatures
                </h1>
                <p className='mt-2 text-black font-bold text-sm'>
                  My job is to bring out in people what they wouldn t dare do themselves. Men don t want another man to look at their woman because they don t know how to...
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 md:w-1/3">
              <div className="border-2 border-gray-200 border-opacity-60 overflow-hidden">
                <Image
                  src="https://habitat-recreation.myshopify.com/cdn/shop/articles/rb3.jpg?v=1648553227&width=1060"
                  alt="blog"
                  width={1060}
                  height={500}
                  className="w-full object-cover object-top"
                />
              </div>
              <div>
                <p className='mt-8'>March 29 2022</p>
                <h1 className='mt-4 text-black font-bold text-xl'>
                  Tips for active relaxation in the cold season
                </h1>
                <p className='mt-2 text-black font-bold text-sm'>
                  There has to be a balance between your mental satisfaction and the financial needs of your company. There is no denying that blue, gray and white have taken center stage...
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-4 md:w-1/3">
              <div className="border-2 border-gray-200 border-opacity-60 overflow-hidden">
                <Image
                  src="https://habitat-recreation.myshopify.com/cdn/shop/articles/rb2.jpg?v=1648552052&width=1060"
                  alt="blog"
                  width={1060}
                  height={500}
                  className="w-full object-cover object-top"
                />
              </div>
              <div>
                <p className='mt-8'>March 29 2022</p>
                <h1 className='mt-4 text-black font-bold text-xl'>
                  Unwind this fall with these passive relaxation activities
                </h1>
                <p className='mt-2 text-black font-bold text-sm'>
                  There is no denying that blue, gray and white have taken center stage recently. If you look closely at decorator magazines, you may find that beige and "greige", a combination...
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-4 md:w-1/3">
              <div className="border-2 border-gray-200 border-opacity-60 overflow-hidden">
                <Image
                  src="https://habitat-recreation.myshopify.com/cdn/shop/articles/rb1.jpg?v=1648543796&width=1060"
                  alt="blog"
                  width={1060}
                  height={500}
                  className="w-full object-cover object-top"
                />
              </div>
              <div>
                <p className='mt-8'>March 29 2022</p>
                <h1 className='mt-4 text-black font-bold text-xl'>
                  Work out for a cause on International Women s Day
                </h1>
                <p className='mt-2 text-black font-bold text-sm'>
                  My relationships with producers or photographers - these are relationships that took years. I have my favourite fashion decade, yes, yes, yes: 60s. It was a sort of little revolution;...
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default page
