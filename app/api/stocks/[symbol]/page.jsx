export async function GET(req, { params }) {
  const { symbol } = params;

  try {
    // Call your existing TradeBrains API (or Alpha Vantage if you want to switch)
    const res = await fetch(
      `https://portal.tradebrains.in/api/assignment/stock/${symbol}/prices?days=1&type=INTRADAY&limit=1`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return new Response(
        JSON.stringify({ prices: [] }), 
        { status: 500 }
      );
    }

    const data = await res.json().catch(() => null);
    return new Response(
      JSON.stringify(data ?? { prices: [] }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ prices: [] }),
      { status: 500 }
    );
  }
}
