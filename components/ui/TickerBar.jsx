// components/ui/TickerBar.jsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export const TickerBar = ({ data }) => {
  const [tickerItems, setTickerItems] = useState([]);

  useEffect(() => {
    console.log("gainers",data)
    if (data && data.gainers && data.losers) {
      const combinedItems = [...data.gainers, ...data.losers];
      setTickerItems(combinedItems);
    }
  }, [data]);

  if (tickerItems.length === 0) {
    return null;
  }

  return (
    <div className="ticker-bar overflow-hidden relative">
      <div className="ticker-container flex animate-ticker">
        {tickerItems.map((item, index) => (
          <Link key={index} href={`/stock/${item.symbol}`} className="ticker-item px-3 py-1 text-sm font-medium">
            <span>{item.symbol}</span>
            <span className={`ml-2 ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {item.change.toFixed(2)}%
            </span>
          </Link>
        ))}
        {tickerItems.map((item, index) => (
          <Link key={`duplicate-${index}`} href={`/stock/${item.symbol}`} className="ticker-item px-3 py-1 text-sm font-medium">
            <span>{item.symbol}</span>
            <span className={`ml-2 ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {item.change.toFixed(2)}%
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};