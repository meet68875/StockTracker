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

export const getStockPrices = async (
  symbol,
  days = 1,
  type = "INTRADAY",
  limit = 1
) => {
  try {
    const res = await fetch(
      `${API_HOST}/api/assignment/stock/${symbol}/prices?days=${days}&type=${type}&limit=${limit}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("Stock Prices API failed:", res.status, res.statusText);
      return { prices: [] }; // fallback object
    }

    const data = await res.json().catch(() => null);
    return data ?? { prices: [] };
  } catch (error) {
    console.error("Stock Prices API error:", error);
    return { prices: [] };
  }
};

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
