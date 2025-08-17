'use client';
import { getStockPrices } from '@/lib/api';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useFavorites } from '@/components/hooks/useFavorites';

export default function FavoritesPage() {
  const [favoriteStocks, setFavoriteStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getFavorites, removeFavorite } = useFavorites();

  useEffect(() => {
    const fetchFavoriteStocks = async () => {
      setLoading(true);
      const symbols = getFavorites();
      console.log("setFavoriteStocks",symbols)
      if (symbols.length > 0) {
       const fetchedData = await Promise.all(
  symbols.map(async (symbol) => {
    const data = await getStockPrices(symbol, 1, 'INTRADAY');
    if (!data || data.length === 0) return null;

    const latest = data[0];
    return {
      symbol,
      companyName: data.companyName ?? symbol,
      open: latest.open,
      high: latest.high,
      low: latest.low,
      close: latest.close,
      change: latest.change,
      percent: latest.percent,
    };
  })
);

const cleaned = fetchedData.filter((item) => item !== null);
setFavoriteStocks(cleaned);
      }
      setLoading(false);
    };
    fetchFavoriteStocks();
  }, []);

  const handleRemove = (symbol) => {
    removeFavorite(symbol);
    setFavoriteStocks((prev) => prev.filter((item) => item.symbol !== symbol));
  };

  const CardSkeleton = () => (
    <div className="bg-white rounded-xl shadow-md p-4 animate-pulse h-48" />
  );

  if (loading) {
    return (
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (favoriteStocks.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">No Favorites Yet</h2>
        <p className="text-gray-600 mb-4">
          Add some stocks to your favorites by clicking the heart icon on a stock's page.
        </p>
        <Link href="/">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg inline-flex items-center">
            <i className="pi pi-home mr-2" />
            Go to Search
          </button>
        </Link>
      </div>
    );
  }
  console.log("favoriteStocks",favoriteStocks)

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📈 My Favorite Stocks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteStocks.map((stock, index) => {
          const isUp = stock.percent > 0;
          return (
            <div
              key={stock.symbol || index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between h-full transition-transform duration-200 hover:scale-[1.01]"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-3 bg-gray-100 border-b">
                <div className="text-lg font-bold">{stock.symbol}</div>
                <button
                  onClick={() => handleRemove(stock.symbol)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  title="Remove from favorites"
                >
                  <i className="pi pi-times text-xl" />
                </button>
              </div>

              {/* Body */}
              <div className="px-4 py-3 flex-1">
                <div className="text-xl font-semibold mb-1 truncate">
                  {stock.companyName ?? stock.symbol}
                </div>

                <div className="mb-2">
                  <span className="text-gray-600">Price:</span>{' '}
                  <span className="text-blue-600 font-bold">
                    ${stock.close?.toFixed(2) ?? 'N/A'}
                  </span>
                </div>

                <div className="text-sm text-gray-500 mb-2">
                  Open: ${stock.open?.toFixed(2) ?? 'N/A'} | High: $
                  {stock.high?.toFixed(2) ?? 'N/A'} | Low: $
                  {stock.low?.toFixed(2) ?? 'N/A'}
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <i
                    className={`pi ${
                      isUp
                        ? 'pi-arrow-up-right text-green-500'
                        : 'pi-arrow-down-right text-red-500'
                    }`}
                  />
                  <span
                    className={`text-base font-bold ${
                      isUp ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stock.change?.toFixed(2) ?? 'N/A'} (
                    {stock.percent?.toFixed(2) ?? 'N/A'}%)
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t bg-gray-50 flex justify-end">
                <Link href={`/stock/${stock.symbol}`}>
                  <button className="bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-lg text-sm flex items-center transition-colors">
                    <i className="pi pi-search mr-2" />
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
