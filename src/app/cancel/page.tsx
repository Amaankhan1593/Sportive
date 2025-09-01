"use client";
import React, { useEffect, useState } from "react";
import { XCircle } from "lucide-react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Link from "next/link";

/* FallingXs component unchanged */
const FallingXs = ({ count = 12 }) => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = Math.round(Math.random() * 100);
        const delay = (Math.random() * 6).toFixed(2);
        const size = Math.round(12 + Math.random() * 28);
        const duration = (4 + Math.random() * 6).toFixed(2);
        return (
          <div
            key={i}
            className="absolute transform -translate-x-1/2"
            style={{
              left: `${left}%`,
              top: `-6%`,
              fontSize: `${size}px`,
              animation: `fall ${duration}s linear ${delay}s infinite`,
              opacity: 0.85,
              color: "#F87171",
            }}
          >
            ✖
          </div>
        );
      })}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-8vh) rotate(0deg);
            opacity: 0.0;
          }
          10% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(120vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default function Page() {
  const [undoText, setUndoText] = useState("Undo");
  const [showConfetti, setShowConfetti] = useState(false);

  // dims ensure we provide both w and h for confettiSource and avoid SSR issues
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    // set dimensions on client
    const setWindowDims = () => setDims({ w: window.innerWidth, h: window.innerHeight });

    setWindowDims();
    window.addEventListener("resize", setWindowDims);

    // small UX: briefly show a gentle reversed confetti when page opens (optional)
    setShowConfetti(true);
    const t = setTimeout(() => setShowConfetti(false), 1800);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", setWindowDims);
    };
  }, []);

  // motion variants
  // const container = {
  //   hidden: { opacity: 0, y: 12 },
  //   show: { opacity: 1, y: 0, transition: { stiffness: 120, type: "spring", damping: 14 } },
  // };

  function handleRetry() {
    setUndoText("Retrying...");
    setTimeout(() => {
      window.location.href = "/checkout";
    }, 700);
  }

  function handleUndo() {
    setUndoText("Restored ✓");
    setTimeout(() => setUndoText("Undo"), 2500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center p-6 relative">
      {/* soft reversed confetti (subtle) */}
      {showConfetti && dims.w > 0 && dims.h > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {/* supply x,y,w,h to satisfy the type and behavior */}
          <Confetti
            recycle={false}
            numberOfPieces={60}
            gravity={0.2}
            confettiSource={{ x: 0, y: 0, w: dims.w, h: dims.h }}
          />
        </div>
      )}

      {/* Falling decorative Xs */}
      <FallingXs count={10} />

      <motion.section
        initial="hidden"
        animate="show"
        // variants={container}
        className="relative z-10 w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-red-100 p-8 md:p-12 text-center"
        aria-labelledby="canceled-heading"
        role="region"
      >
        {/* animated icon */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 16 }}
          className="mx-auto mb-4 w-fit"
        >
          <div className="bg-red-50 rounded-full p-4 inline-flex">
            <XCircle className="w-20 h-20 text-red-500 drop-shadow-md" />
          </div>
        </motion.div>

        <h1 id="canceled-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Payment Canceled
        </h1>

        <p className="mt-3 text-gray-600 text-base md:text-lg">
          No worries — your cart is still intact. When you re ready, you can try again or return to your cart.
        </p>

        {/* Buttons */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRetry}
            className="md:col-span-1 col-span-1 px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-red-200"
            aria-label="Retry payment"
          >
            Retry Payment
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02 }}
            href="/"
            className="md:col-span-1 col-span-1 px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-medium bg-white shadow-sm hover:shadow-md transition"
            aria-label="Return to cart"
          >
            Return to Home
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={handleUndo}
            className="md:col-span-1 col-span-1 px-6 py-3 rounded-full text-red-600 border border-red-200 bg-red-50 font-semibold hover:bg-red-100 transition"
            aria-live="polite"
          >
            {undoText}
          </motion.button>
        </div>

        {/* Extra actions & support */}
        <div className="mt-6 text-sm text-gray-500">
          <p>
            Need help?{" "}
            <a href="/support" className="text-red-600 underline font-medium">
              Contact support
            </a>{" "}
            • or{" "}
            <Link href="/" className="underline font-medium">
              continue shopping
            </Link>
          </p>
        </div>

        {/* subtle footer hint */}
        <p className="mt-4 text-xs text-gray-400">If this was a mistake, you can retry or restore your cart at any time.</p>
      </motion.section>
    </div>
  );
}
