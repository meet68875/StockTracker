// app/page.jsx
import Hero from "@/components/Hero";
import FeaturedStocks from "@/components/ui/FeaturedStocks";
import Search from "@/components/ui/Search";
import { getIndexMovers } from "@/lib/api";
import { GainerLoserList } from "@/components/ui/GainerLoserList";
import { MarketSummary } from "@/components/ui/MarketSummary";

export default async function Home() {
  const movers = await getIndexMovers("NIFTY");
  const gainers = movers?.gainers || [];
  const losers = movers?.losers || [];
  const volumeMovers = movers?.volume_movers || [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Search and Hero Section */}
      <section className="py-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-800 dark:text-white">
            Your Gateway to Market Data 📈
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Get real-time stock insights, track your favorite companies, and stay ahead of the market.
          </p>
          <div className="w-full max-w-xl mx-auto mb-10">
            <Search />
          </div>
        </div>
      </section>

      {/* Featured Stocks (e.g., popular or trending) */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <FeaturedStocks />
        </div>
      </section>

      {/* Market Summary */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
            Market at a Glance
          </h2>
          <MarketSummary
            gainersCount={movers?.gainers_count ?? 0}
            losersCount={movers?.losers_count ?? 0}
            totalCount={movers?.total_count ?? 0}
            volumeMovers={volumeMovers}
          />
        </div>
      </section>

      {/* Gainer and Loser Lists */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
            Today’s Top Movers
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Explore the top performing and underperforming stocks driving today’s market trends.
          </p>
          <GainerLoserList gainers={gainers} losers={losers} />
        </div>
      </section>
    </div>
  );
}