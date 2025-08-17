"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { searchStocks } from "@/lib/api";

const Search = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  const handleSearch = async (query) => {
    if (!query.trim().length) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const data = await searchStocks(query);
    
    setSuggestions(data);
    setShowSuggestions(true);
  };

  const handleSelect = (item) => {
    router.push(`/stock/${item.symbol}`);
    setShowSuggestions(false);
    setValue(item.name);
  };

  const itemTemplate = (item) => (
    <li
      key={item.symbol}
      onClick={() => handleSelect(item)}
      className="flex items-center p-3 rounded-sm bg-gray-50 hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
    >
      <div className="flex-1">
        <div className="font-semibold text-lg">
          {item.name}{" "}
          <span className="text-sm font-normal text-gray-500">
            ({item.symbol})
          </span>
        </div>
        <div className="text-sm text-gray-600">{item.exchange}</div>
      </div>
      {item.is_popular && <span className="text-yellow-500 ml-2">⭐</span>}
    </li>
  );

  return (
    <div className="relative rounded-lg shadow-md bg-white p-4">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleSearch(e.target.value);
        }}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        placeholder="Search for a stock..."
        className="w-full text-lg border-none focus:outline-none focus:ring-0"
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full rounded-md border border-gray-200 bg-white shadow-lg overflow-y-auto max-h-64 mt-2">
          {suggestions.map(itemTemplate)}
        </ul>
      )}
    </div>
  );
};

export default Search;
