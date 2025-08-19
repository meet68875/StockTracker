// app/about/page.jsx

import React from 'react';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800 dark:text-white">
          About StockTrackr
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
          Your trusted companion for real-time market data and stock insights.
        </p>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            At StockTrackr, our mission is to democratize access to financial information. We believe that everyone, from seasoned investors to curious beginners, should have the tools they need to make informed decisions. We provide a clean, intuitive platform to track your favorite stocks, monitor market trends, and stay updated with key financial data.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Technology</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
            <li>Built with **Next.js** for a fast and efficient user experience.</li>
            <li>Styled using **Tailwind CSS** for a modern, responsive design.</li>
            <li>Powered by reliable financial APIs to provide **real-time stock data**.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}