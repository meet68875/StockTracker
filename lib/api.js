const API_HOST = "https://portal.tradebrains.in";

export const searchStocks = async (keyword, length = 10) => {
  try {
    const res = await fetch(
      `${API_HOST}/api/assignment/search?keyword=${keyword}&length=${length}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("Search API failed:", res.status, res.statusText);
      return []; // fallback empty array
    }

    const data = await res.json().catch(() => null);
    return data ?? [];
  } catch (error) {
    console.error("Search API error:", error);
    return [];
  }
};

// export const getStockPrices = async (
//   symbol,
//   days = 1,
//   type = "INTRADAY",
//   limit = 1
// ) => {
//   try {
//     const res = await fetch(
//       `${API_HOST}/api/assignment/stock/${symbol}/prices?days=${days}&type=${type}&limit=${limit}`,
//       { cache: "no-store" }
//     );

//     if (!res.ok) {
//       console.error("Stock Prices API failed:", res.status, res.statusText);
//       return { prices: [] }; // fallback object
//     }

//     const data = await res.json().catch(() => null);
//     return data ?? { prices: [] };
//   } catch (error) {
//     console.error("Stock Prices API error:", error);
//     return { prices: [] };
//   }
// };

// lib/api.js

function generateRandomStockData(symbol, days = 30) {
  const data = [];
  let basePrice = 100 + Math.random() * 100; 
  const now = new Date();

  for (let i = 0; i < days; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);

    const open = basePrice + (Math.random() - 0.5) * 5;
    const high = open + Math.random() * 5;
    const low = open - Math.random() * 5;
    const close = low + Math.random() * (high - low);
    const volume = Math.floor(1000000 + Math.random() * 5000000);

    data.push({
      date: date.toISOString(),
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      volume,
      companyName: `${symbol} Corp`,
    });

    basePrice = close;
  }

  return data.reverse(); // so oldest first, latest last
}

export async function getStockPrices(symbol, days = 30, type = "INTRADAY", limit = 30) {
  return generateRandomStockData(symbol, Math.min(days, limit));
}

export const getIndexMovers = async (index = "NIFTY") => {
  try {
    const res = await fetch(
      `${API_HOST}/api/assignment/index/${index}/movers/`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("Index Movers API failed:", res.status, res.statusText);
      return { movers: [] }; // fallback
    }

    const data = await res.json().catch(() => null);
    return data ?? { movers: [] };
  } catch (error) {
    console.error("Index Movers API error:", error);
    return { movers: [] };
  }
};
