import React from "react";
import Link from "next/link";
const LoginForm = () => {
  return (
    <section className="min-h-screen flex justify-center pt-20">
      <div className="w-full max-w-xl p-8">
        <h2 className="text-3xl font-bold italic text-center mb-3">Login</h2>
        <p className="text-md font-semibold text-center">
          If you have an account with us, please log in.
        </p>
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full text-sm text-black placeholder-black mt-8 px-5 py-3 border"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full text-sm text-black placeholder-black px-5 py-3 border"
              required
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full rounded-full font-bold text-sm cursor-pointer bg-black border text-white py-4 transition"
          >
            SIGN IN
          </button>

          <div className="text-center mt-2 mb-6 text-sm text-black font-semibold">
            <Link href={'/forgotpassword'}><p className="underline cursor-pointer hover:text-red-500">
              Forgot your password?
            </p></Link>
          </div>

          <hr className="mt-10 border-gray-200" />

          <div className="flex justify-between items-center mt-4">
            <p className="text-xl italic font-bold">Dont have an account?</p>
            <Link href="/signup"><p className="cursor-pointer text-sm font-semibold underline decoration-offset-4 hover:text-red-500">
              Create an account
            </p></Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
