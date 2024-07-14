// src/app/components/Drinks.js

"use client";

import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';  // Import the LoadingSpinner component

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);  // Set initial loading state to true

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch('/api/data');  // Fetch data from the API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Filter the data to get only the "Drinks" category
        const drinksCategory = data.find(category => category.category === 'Drinks');
        const drinksData = drinksCategory ? drinksCategory.items : [];
        setDrinks(drinksData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDrinks();
  }, []);

  if (loading) {
    return <LoadingSpinner />;  // Show the spinner while loading
  }

  if (error) {
    return <div className='text-red-500 text-center'>Error: {error}</div>;  // Show the error message
  }

  return (
    <>
      {drinks.map((drink, index) => (
        <div
          key={index}  // Use index as the key since there's no unique ID
          className='relative bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
        >
          {/* Price Button */}
          <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
            {drink.price}
          </button>

          {/* Drink Image */}
          <img src={drink.src} alt={drink.title} className='mx-auto mb-4' />

          {/* Drink Title */}
          <h4 className='font-semibold my-2'>{drink.title}</h4>

          {/* Description */}
          <p className='text-sm text-gray-500'>{drink.description}</p>
        </div>
      ))}
    </>
  );
}
