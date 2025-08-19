// app/about/page.jsx

import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="w-full max-w-4xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6 text-gray-800 dark:text-white">
          About StockTrackr
        </h1>
        <p className="text-center text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8">
          Your trusted companion for real-time market data and stock insights.
        </p>

        {/* Mission Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-800 dark:text-white text-center sm:text-left">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base lg:text-lg text-center sm:text-left">
            At StockTrackr, our mission is to democratize access to financial
            information. We believe that everyone, from seasoned investors to
            curious beginners, should have the tools they need to make informed
            decisions. We provide a clean, intuitive platform to track your
            favorite stocks, monitor market trends, and stay updated with key
            financial data.
          </p>
        </section>

        {/* Technology Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-800 dark:text-white text-center sm:text-left">
            Our Technology
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed space-y-2 text-sm sm:text-base lg:text-lg text-center sm:text-left">
            <li>
              Built with <span className="font-semibold">Next.js</span> for a
              fast and efficient user experience.
            </li>
            <li>
              Styled using <span className="font-semibold">Tailwind CSS</span>{" "}
              for a modern, responsive design.
            </li>
            <li>
              Powered by reliable financial APIs to provide{" "}
              <span className="font-semibold">real-time stock data</span>.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
