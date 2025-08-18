// app/stock/[symbol]/page.jsx
import StockGraph from '@/components/ui/StockGraph';
import { FavoriteButton } from '@/components/ui/FavoriteButton';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getStockPrices } from '@/lib/api';

export async function generateMetadata({ params }) {
  const symbol = params.symbol.toUpperCase();
  const data = await getStockPrices(symbol, 1);
  const stockName = data?.[0]?.companyName || symbol;

  return {
    title: `${stockName} (${symbol}) Stock Price`,
    description: `Real-time stock price and historical data for ${stockName} (${symbol}).`,
    keywords: `${symbol}, ${stockName}, stock, share, market, chart, graph`,
  };
}

export default async function StockDetailsPage({ params }) {
  const symbol = params.symbol.toUpperCase();
  // Using dummy/static API
  const priceData = await getStockPrices(symbol, 30, 'INTRADAY');

  if (!priceData || priceData.length === 0) {
    notFound();
  }

  const chartLabels = priceData.map(d => new Date(d.date).toLocaleDateString());
  const priceValues = priceData.map(d => d.close);
  const volumeValues = priceData.map(d => d.volume);

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        type: 'line',
        label: `${symbol} Price`,
        data: priceValues,
        borderColor: '#4bc0c0',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
        yAxisID: 'yPrice',
        fill: false,
      },
      {
        type: 'bar',
        label: `${symbol} Volume`,
        data: volumeValues,
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        yAxisID: 'yVolume',
      },
    ],
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <button className="text-blue-600 hover:underline text-sm flex items-center">
                ← Back
              </button>
            </Link>
            <h1 className="text-2xl font-bold">
              {priceData[0]?.companyName || symbol} ({symbol})
            </h1>
          </div>
          <FavoriteButton symbol={symbol} />
        </div>

        <StockGraph data={chartData} />
      </div>
    </div>
  );
}
