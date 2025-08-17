import Link from 'next/link';

export const MarketSummary = ({ gainersCount, losersCount, totalCount, volumeMovers }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Market Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Gainers Card */}
        <div className="bg-green-50 text-green-800 p-4 rounded-lg flex flex-col items-center">
          <i className="pi pi-arrow-up text-4xl mb-2"></i>
          <span className="text-lg font-semibold">Total Gainers</span>
          <span className="text-4xl font-bold">{gainersCount}</span>
        </div>

        {/* Losers Card */}
        <div className="bg-red-50 text-red-800 p-4 rounded-lg flex flex-col items-center">
          <i className="pi pi-arrow-down text-4xl mb-2"></i>
          <span className="text-lg font-semibold">Total Losers</span>
          <span className="text-4xl font-bold">{losersCount}</span>
        </div>

        {/* Total Stocks Card */}
        <div className="bg-blue-50 text-blue-800 p-4 rounded-lg flex flex-col items-center">
          <i className="pi pi-chart-bar text-4xl mb-2"></i>
          <span className="text-lg font-semibold">Total Stocks</span>
          <span className="text-4xl font-bold">{totalCount}</span>
        </div>
      </div>

      {/* Volume Movers */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-3">Top Volume Movers</h3>
        <ul className="space-y-2">
          {volumeMovers.map((stock) => (
            <li 
              key={stock.symbol} 
              className="flex justify-between items-center py-2 border-b last:border-b-0"
            >
              <Link 
                href={`/stock/${stock.symbol}`} 
                className="font-semibold hover:text-blue-600 transition-colors"
              >
                {stock.symbol}
              </Link>
              <div className="text-sm text-gray-600">
                Volume: {(stock.volume / 1000000).toFixed(2)}M
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
