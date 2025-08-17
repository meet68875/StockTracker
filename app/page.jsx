// app/page.jsx
import Home from "./home/page";

export const metadata = {
  title: "Stock Tracker | Your Portfolio 📈",
  description:
    "Track live stock prices, view featured companies like TATASTEEL, WIPRO, ASIANPAINT, and build your stock portfolio instantly.",
  keywords:
    "stocks, stock tracker, portfolio, TATASTEEL, WIPRO, ASIANPAINT, BEL",
  openGraph: {
    title: "Stock Tracker 📈",
    description: "Monitor stock prices and manage your portfolio in real time.",
    url: "https://yourdomain.com",   // 🔹 add your domain here
    siteName: "Stock Tracker",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Tracker 📈",
    description: "Track stocks in real time and manage your portfolio.",
    images: ["/og-image.png"], // 🔹 add an OG/Twitter preview image
  },
};

export default function Page() {
  return <Home />;
}
