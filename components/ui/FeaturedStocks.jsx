"use client";
import { useEffect, useState } from "react";
import { getStockPrices } from "@/lib/api";
import Link from "next/link";

export default function FeaturedStocks() {
  const [featuredStocks, setFeaturedStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pick a few default popular stocks
  const symbols = ["BEL", "WIPRO", "TATASTEEL", "TSLA"];

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true);
      const fetchedData = await Promise.all(
        symbols.map(async (symbol) => {
          const data = await getStockPrices(symbol, 1, "INTRADAY");
          console.log(data);
          if (!data || !Array.isArray(data) || data.length === 0) return null;

          const latest = data[0];
          const change = latest.close - latest.open;
          const percent = (change / latest.open) * 100;

          return {
            symbol,
            companyName: data.companyName ?? symbol,
            open: latest.open,
            high: latest.high,
            low: latest.low,
            close: latest.close,
           change,
  percent,
          };
        })
      );
      setFeaturedStocks(fetchedData.filter((s) => s !== null));
      setLoading(false);
    };
    fetchFeatured();
  }, []);

  const Card = ({ stock }) => {
    const isUp = stock.percent > 0;

    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 border border-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{stock.symbol}</h2>
            <p className="text-sm text-gray-500">{stock.companyName}</p>
          </div>
          <span
            className={`px-2 py-1 rounded-md text-sm font-semibold ${
              isUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {isUp ? "▲" : "▼"} {stock.percent?.toFixed(2) ?? "N/A"}%
          </span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <p className="text-2xl font-bold text-gray-900">
            ₹{stock.close?.toFixed(2) ?? "N/A"}
          </p>
          <p className="text-sm text-gray-500">
            {isUp ? "Up by" : "Down by"} {stock.change?.toFixed(2) ?? "N/A"}
          </p>
        </div>

        {/* Extra Info */}
        <div className="text-xs text-gray-500 mb-4">
          Open: {stock.open?.toFixed(2) ?? "N/A"} | High:{" "}
          {stock.high?.toFixed(2) ?? "N/A"} | Low:{" "}
          {stock.low?.toFixed(2) ?? "N/A"}
        </div>

        {/* CTA */}
        <Link href={`/stock/${stock.symbol}`}>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition">
            View Details
          </button>
        </Link>
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mt-10">
      <h2 className="text-2xl font-bold mb-6">Featured Stocks</h2>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredStocks.map((stock) => (
            <Card key={stock.symbol} stock={stock} />
          ))}
        </div>
      )}
    </div>
  );
}
