// app/contact/page.jsx

import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800 dark:text-white">
          Get in Touch
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
          Have questions, feedback, or suggestions? We'd love to hear from you.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-blue-500 text-white">
                <i className="pi pi-envelope text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <a href="mailto:support@stocktrackr.com" className="hover:underline">support@stocktrackr.com</a>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-blue-500 text-white">
                <i className="pi pi-twitter text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Twitter</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <Link href="https://x.com/stocktrackr" target="_blank" className="hover:underline">@StockTrackr</Link>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-blue-500 text-white">
                <i className="pi pi-linkedin text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <Link href="https://linkedin.com/company/stocktrackr" target="_blank" className="hover:underline">StockTrackr</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
