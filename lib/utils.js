const API_BASE_URL = 'https://portal.tradebrains.in/api/assignment';

export const searchStocks = async (keyword, length = 10) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search?keyword=${keyword}&length=${length}`);
    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }
    return response.json();
  } catch (error) {
    console.error('Search API error:', error);
    return [];
  }
};

export const getStockPrices = async (symbol, days = 1, type = 'INTRADAY', limit = 1) => {
  try {
    const response = await fetch(`${API_BASE_URL}/stock/${symbol}/prices?days=${days}&type=${type}&limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch stock prices');
    }
    return response.json();
  } catch (error) {
    console.error('Stock prices API error:', error);
    return null;
  }
};