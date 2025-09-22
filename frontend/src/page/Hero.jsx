import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen flex items-center justify-center">
      <div className="text-center px-4 md:px-0 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Unlock Your Career Potential with AI
        </h1>
        <p className="text-gray-600 mb-8">
          Get personalized career advice, explore opportunities, and plan your
          future with smart AI guidance.
        </p>
        <a
          href="/signup"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}