import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Log the fetched data
        console.log('Fetched data:', data);

        if (Array.isArray(data)) {
          const drinksCategory = data.find(category => category.category === 'Drinks');
          
          // Check if drinksCategory is an object with items array
          if (drinksCategory && Array.isArray(drinksCategory.items)) {
            setDrinks(drinksCategory.items);
          } else {
            throw new Error('Invalid data structure for Drinks category');
          }
        } else {
          throw new Error('Expected data to be an array');
        }
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('Error fetching drinks data: ' + err.message);
      })
      .finally(() => {
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
      {drinks.length === 0 ? (
        <div className='text-center text-gray-500'>No drinks available</div>
      ) : (
        drinks.map((drink, index) => (
          <div
            key={index}  // Use index as the key if there is no unique ID
            className='relative bg-gray-200 p-2 text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
          >
            <button className='absolute top-1 right-1 md:top-2 md:right-2 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-2 shadow-md hover:bg-amber-600 text-xs'>
              {drink.price}
            </button>

            <img src={drink.src} alt={drink.title} className='mx-auto mb-2 h-20 w-20 object-cover' />

            <h4 className='font-semibold my-1 text-base'>{drink.title}</h4>

            <p className='text-xs text-gray-500'>{drink.description || 'No description available'}</p>
          </div>
        ))
      )}
    </>
  );
}
