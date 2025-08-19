// app/stock/[symbol]/page.jsx
import StockGraph from "@/components/ui/StockGraph";
import { FavoriteButton } from "@/components/ui/FavoriteButton";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStockPrices } from "@/lib/api";

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
  const priceData = await getStockPrices(symbol, 30, "INTRADAY");

  if (!priceData || priceData.length === 0) {
    notFound();
  }

  const chartLabels = priceData.map((d) =>
    new Date(d.date).toLocaleDateString()
  );
  const priceValues = priceData.map((d) => d.close);
  const volumeValues = priceData.map((d) => d.volume);

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        type: "line",
        label: `${symbol} Price`,
        data: priceValues,
        borderColor: "#4bc0c0",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
        yAxisID: "yPrice",
        fill: false,
      },
      {
        type: "bar",
        label: `${symbol} Volume`,
        data: volumeValues,
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        borderColor: "rgba(153, 102, 255, 1)",
        yAxisID: "yVolume",
      },
    ],
  };

  return (
    <div className="p-3 sm:p-4 max-w-6xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <Link href="/">
              <button className="flex items-center gap-2 text-blue-600 hover:underline text-sm">
                <i className="pi pi-arrow-left text-base leading-none"></i>
                <span>Back</span>
              </button>
            </Link>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
              {priceData[0]?.companyName || symbol} ({symbol})
            </h1>
          </div>
          <FavoriteButton symbol={symbol} />
        </div>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[300px]">
            <StockGraph data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
}
