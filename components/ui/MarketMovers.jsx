import Link from "next/link";

export const MarketSummary = ({ gainersCount, losersCount, totalCount, volumeMovers }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* 3 Key Market Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Gainers */}
        <div className="bg-green-50 text-green-800 p-6 rounded-xl flex flex-col items-center">
          <i className="pi pi-arrow-up text-4xl mb-2"></i>
          <span className="text-lg font-medium">Total Gainers</span>
          <span className="text-4xl font-extrabold">{gainersCount}</span>
        </div>

        {/* Losers */}
        <div className="bg-red-50 text-red-800 p-6 rounded-xl flex flex-col items-center">
          <i className="pi pi-arrow-down text-4xl mb-2"></i>
          <span className="text-lg font-medium">Total Losers</span>
          <span className="text-4xl font-extrabold">{losersCount}</span>
        </div>

        {/* Total */}
        <div className="bg-blue-50 text-blue-800 p-6 rounded-xl flex flex-col items-center">
          <i className="pi pi-chart-bar text-4xl mb-2"></i>
          <span className="text-lg font-medium">Total Stocks</span>
          <span className="text-4xl font-extrabold">{totalCount}</span>
        </div>
      </div>

      {/* Volume Movers */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Top Volume Movers</h3>
        <ul className="divide-y divide-gray-200">
          {volumeMovers.map((stock) => (
            <li key={stock.symbol} className="flex justify-between py-3">
              <Link
                href={`/stock/${stock.symbol}`}
                className="font-semibold hover:text-blue-600 transition-colors"
              >
                {stock.symbol}
              </Link>
              <div className="text-sm text-gray-600">
                {(stock.volume / 1_000_000).toFixed(2)}M
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
