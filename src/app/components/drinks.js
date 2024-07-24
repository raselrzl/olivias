// src/app/components/Drinks.js

import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        // Find the Drinks category
        const drinksCategory = data.find(category => category.category === 'Drinks');
        
        // Log the Drinks category to the console
        console.log('Drinks data:', drinksCategory);
        
        // Extract the items from the Drinks category if it exists
        const drinksData = drinksCategory ? drinksCategory.items : [];
        
        // Set the Drinks data to state
        setDrinks(drinksData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div><LoadingSpinner /></div>;
  }

  if (error) {
    return <div className='text-red-500 text-center'>Error: {error}</div>;
  }

  return (
    <>
      {drinks.map((drink, index) => (
        <div
          key={index}  // Use index as the key since there's no unique ID
          className='relative bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
        >
          <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
            {drink.price}
          </button>

          <img src={drink.src} alt={drink.title} className='mx-auto mb-4' />

          <h4 className='font-semibold my-2'>{drink.title}</h4>

          <p className='text-sm text-gray-500'>{drink.description}</p>
        </div>
      ))}
    </>
  );
}
