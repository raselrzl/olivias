import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/loading-spinner';  // Import the LoadingSpinner component
import { BASE_API_URL } from '@/lib/utils';

export default function PopularPizzas() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/api/data`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        console.log('Fetched data:', data);

        if (Array.isArray(data)) {
          const popularPizzasCategory = data.find(category => category.category === 'Popular Pizzas');
          console.log('Popular Pizzas category:', popularPizzasCategory);

          if (popularPizzasCategory && Array.isArray(popularPizzasCategory.items)) {
            setPizzas(popularPizzasCategory.items);
          } else {
            throw new Error('Popular Pizzas category or items are missing or in wrong format');
          }
        } else {
          throw new Error('Fetched data is not an array');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Error fetching data: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div><LoadingSpinner /></div>;  // Show the spinner while loading
  }

  if (error) {
    return <div className='text-red-500 text-center'>Error: {error}</div>;  // Show the error message
  }

  if (!BASE_API_URL) {
    return null;
  }

  return (
    <>
      {pizzas.length === 0 ? (
        <div className='text-center text-gray-500'>No popular pizzas available</div>
      ) : (
        pizzas.map((pizza, index) => (
          <div
            key={index}  // Use index as the key if there is no unique ID
            className='relative bg-gray-200 p-4 text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
          >
            {/* Price Button */}
            <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
              {pizza.price}
            </button>

            {/* Pizza Image */}
            <img src={pizza.src} alt={pizza.title} className='mx-auto mb-2' />

            {/* Pizza Title */}
            <h4 className='font-semibold text-md mb-1'>{pizza.title}</h4>

            {/* Description */}
            <p className='text-xs text-gray-500'>{pizza.description || 'No description available'}</p>
          </div>
        ))
      )}
    </>
  );
}
