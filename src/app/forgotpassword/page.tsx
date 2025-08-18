import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <section className="min-h-screen flex justify-center pt-20">
        <div className="w-full max-w-xl p-8">
          <h2 className="text-3xl font-bold italic text-center mb-3">
            Reset your password
          </h2>
          <p className="text-md font-semibold text-center">
            We will send you an email to reset your password
          </p>
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full text-sm text-black placeholder-black mt-8 px-5 py-4 border"
                required
              />
            </div>
            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full rounded-full font-bold text-sm cursor-pointer bg-black border text-white py-4 transition"
            >
              SUBMIT
            </button>

            <p className="cursor-pointe text-center text-sm font-semibold underline decoration-offset-4 hover:text-red-500">
              Cancel
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default page;
