import { getIndexMovers } from "@/lib/api";
import { TickerBar } from "@/components/ui/TickerBar";
import Header from "@/components/common/Header";
import "primeicons/primeicons.css";
import "./globals.css";
import Footer from "@/components/common/Footer";
import { MarketSummary } from "@/components/ui/MarketSummary";
import { GainerLoserList } from "@/components/ui/GainerLoserList";

export default async function RootLayout({ children }) {
  const movers = await getIndexMovers("NIFTY");


  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <TickerBar data={movers} />
     

        <main className="container mx-auto px-4">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
