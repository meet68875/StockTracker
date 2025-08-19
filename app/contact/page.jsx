// app/contact/page.jsx

import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="w-full max-w-3xl mx-auto py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6 text-gray-800 dark:text-white">
          Get in Touch
        </h1>
        <p className="text-center text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8">
          Have questions, feedback, or suggestions? We'd love to hear from you.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
          <div className="space-y-8">
            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-blue-500 text-white mx-auto sm:mx-0">
                <i className="pi pi-envelope text-2xl"></i>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                  Email Us
                </h3>
                <p className="text-gray-600 dark:text-gray-400 break-all">
                  <a
                    href="mailto:support@stocktrackr.com"
                    className="hover:underline"
                  >
                    support@stocktrackr.com
                  </a>
                </p>
              </div>
            </div>

            {/* Twitter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-blue-500 text-white mx-auto sm:mx-0">
                <i className="pi pi-twitter text-2xl"></i>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                  Twitter
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <Link
                    href="https://x.com/stocktrackr"
                    target="_blank"
                    className="hover:underline"
                  >
                    @StockTrackr
                  </Link>
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-blue-500 text-white mx-auto sm:mx-0">
                <i className="pi pi-linkedin text-2xl"></i>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                  LinkedIn
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <Link
                    href="https://linkedin.com/company/stocktrackr"
                    target="_blank"
                    className="hover:underline"
                  >
                    StockTrackr
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
