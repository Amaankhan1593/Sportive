import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <section className="min-h-screen flex justify-center pt-20">
        <div className="w-full max-w-xl p-8">
          <h2 className="text-3xl font-bold italic text-center mb-3">
            Create an account
          </h2>
          <p className="text-md font-semibold text-center">
            Enter your information below to proceed. If you already have an
            account, please log in instead.
          </p>
          <form className="space-y-6">
            {/* Email Input */}
            <div className="flex gap-4 mt-8">
              <input
                type="name"
                placeholder="First name"
                className="w-1/2 text-sm text-black placeholder-black px-5 py-3 border"
                required
              />
              {/*  */}
              <input
                type="last name "
                placeholder="Last name"
                className="w-1/2 text-sm text-black placeholder-black px-5 py-3 border"
                required
              />
            </div>
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full text-sm text-black placeholder-black -mt-3 px-5 py-3 border"
                required
              />
            </div>
            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full text-sm text-black placeholder-black -mt-3 px-5 py-3 border"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full rounded-full font-bold text-sm cursor-pointer bg-black border text-white py-4 transition"
            >
              CREATE AN ACCOUNT
            </button>

            <hr className="mt-10 border-gray-200" />

            <div className="flex mb-10 justify-between items-center mt-4">
              <p className="text-xl italic font-bold">
                Already have an account?
              </p>
              <Link href="/login">
                <p className="cursor-pointer text-sm font-semibold underline decoration-offset-4 hover:text-red-500">
                  Login
                </p>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default page;
