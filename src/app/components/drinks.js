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
        // Log the entire data object to the console for debugging
        console.log('Fetched data:', data);

        // Check if the fetched data is an array
        if (Array.isArray(data)) {
          // Find the Drinks category
          const drinksCategory = data.find(category => category.category === 'Drinks');
          console.log('Drinks data:', drinksCategory);

          // Extract the items from the Drinks category if it exists
          const drinksData = drinksCategory ? drinksCategory.items : [];
          setDrinks(drinksData);  // Set the Drinks data to state
        } else {
          console.error('Fetched data is not an array:', data);
          setError('Unexpected data format');
        }
        
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(err.message);  // Set error message if fetching data fails
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
          className='relative bg-gray-200 p-2 text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
        >
          <button className='absolute top-1 right-1 md:top-2 md:right-2 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-2 shadow-md hover:bg-amber-600 text-xs'>
            {drink.price}
          </button>
          <img src={drink.src} alt={drink.title} className='mx-auto mb-2 h-20 w-20 object-cover' />
          <h4 className='font-semibold my-1 text-base'>{drink.title}</h4>
          <p className='text-xs text-gray-500'>{drink.description}</p>
        </div>
      ))}
    </>
  );
}
