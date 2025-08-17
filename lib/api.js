const API_HOST = 'https://portal.tradebrains.in';

export const searchStocks = async (keyword, length = 10) => {
  try {
    const res = await fetch(`${API_HOST}/api/assignment/search?keyword=${keyword}&length=${length}`);
    if (!res.ok) throw new Error('Failed to fetch search results');
    return res.json();
  } catch (error) {
    console.error('Search API error:', error);
    return [];
  }
};

export const getStockPrices = async (symbol, days = 1, type = 'INTRADAY', limit = 1) => {
  try {
    const res = await fetch(`${API_HOST}/api/assignment/stock/${symbol}/prices?days=${days}&type=${type}&limit=${limit}`);
    console.log("respoonse",res)
    if (!res.ok) throw new Error('Failed to fetch stock prices');
    return res.json();
  } catch (error) {
    console.error('Stock prices API error:', error);
    return null;
  }
};

export const getIndexMovers = async (index = 'NIFTY') => {
  try {
    const res = await fetch(`${API_HOST}/api/assignment/index/${index}/movers/`);
    if (!res.ok) throw new Error('Failed to fetch index movers');
    return res.json();
  } catch (error) {
    console.error('Index movers API error:', error);
    return [];
  }
};

