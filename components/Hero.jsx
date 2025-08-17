    // components/Hero.jsx
    "use client";
    import Link from "next/link";

    export default function Hero() {
    return (
        <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-6 text-center rounded-2xl shadow-md mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Track Stocks in Real Time 📈
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
            Stay ahead of the market. Search, analyze, and follow your favorite stocks with live updates.
        </p>
       {/*  <Link href="/stock">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition">
            Get Started
            </button>
        </Link> */}
        </section>
    );
    }
