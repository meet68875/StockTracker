'use client';
import { useFavorites } from '@/components/hooks/useFavorites';
import { useState, useEffect } from 'react';

export const FavoriteButton = ({ symbol }) => {
  const { isFavorite, toggleFavorite } = useFavorites(symbol);
  const [hovered, setHovered] = useState(false);
  console.log("FavoriteButton symbol",symbol)
  return (
    <button
      onClick={toggleFavorite}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-full p-2 transition-all duration-200 hover:bg-red-100 group relative"
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isFavorite ? '#ef4444' : 'none'}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={isFavorite ? '#ef4444' : 'currentColor'}
        className="w-6 h-6 transition-all duration-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.015-4.5-4.5-4.5S12 5.765 12 8.25c0-2.485-2.015-4.5-4.5-4.5S3 5.765 3 8.25c0 4.389 5.4 7.965 9 10.5 3.6-2.535 9-6.111 9-10.5z"
        />
      </svg>

      <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity`}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </div>
    </button>
  );
};
