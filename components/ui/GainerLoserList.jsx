"use client";

import Link from "next/link";

export const GainerLoserList = ({ gainers, losers }) => {
  const renderStockList = (stocks, isGainer) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
      <h3
        className={`text-2xl font-bold mb-4 ${
          isGainer ? "text-green-600" : "text-red-600"
        }`}
      >
        {isGainer ? "Top Gainers" : "Top Losers"}
      </h3>
      <ul className="divide-y divide-gray-200">
        {stocks.slice(0, 10).map((stock) => (
          <li
            key={stock.symbol}
            className="flex justify-between items-center py-3"
          >
            <Link
              href={`/stock/${stock.symbol}`}
              className="font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            >
              {stock.symbol}
            </Link>
            <div
              className={`flex items-center font-bold ${
                isGainer ? "text-green-600" : "text-red-600"
              }`}
            >
              <i
                className={`pi ${
                  isGainer ? "pi-arrow-up" : "pi-arrow-down"
                } mr-2`}
              ></i>
              {stock.percent?.toFixed(2) ?? "N/A"}%
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {renderStockList(gainers, true)}
      {renderStockList(losers, false)}
    </div>
  );
};
