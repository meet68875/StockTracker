'use client';
import { useState, useEffect } from 'react';

export const useFavorites = (symbol) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (symbol) {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.includes(symbol));
    }
  }, [symbol]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      favorites = favorites.filter(fav => fav !== symbol);
    } else {
      favorites.push(symbol);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  const getFavorites = () => {
      return JSON.parse(localStorage.getItem('favorites') || '[]');
  };

  const removeFavorite = (symbolToRemove) => {
      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      favorites = favorites.filter(fav => fav !== symbolToRemove);
      localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return { isFavorite, toggleFavorite, getFavorites, removeFavorite };
};