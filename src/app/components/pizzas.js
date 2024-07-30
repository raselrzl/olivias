import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/loading-spinner';  // Import the LoadingSpinner component

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);  // Initial loading state should be true

  useEffect(() => {
    fetch('/api/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);

        if (Array.isArray(data)) {
          const pizzasCategory = data.find(category => category.category === 'Pizzas');
          console.log('Pizzas category:', pizzasCategory);

          if (pizzasCategory) {
            setPizzas(pizzasCategory.items);
          } else {
            setError('Pizzas category not found');
          }
        } else {
          setError('Unexpected data format: Data is not an array');
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('Error fetching data: ' + err.message);
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
      {pizzas.length === 0 ? (
        <div className='text-center text-gray-500'>No pizzas available</div>
      ) : (
        pizzas.map((pizza, index) => (
          <div
            key={index}  // Use index as the key since there's no unique ID
            className='relative bg-gray-200 p-4 text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
          >
            {/* Price Button */}
            <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
              {pizza.price}
            </button>

            {/* Pizza Image */}
            <img src={pizza.src} alt={pizza.title} className='mx-auto mb-2' />

            {/* Pizza Title */}
            <h4 className='font-semibold text-md my-1'>{pizza.title}</h4>

            {/* Description */}
            <p className='text-xs text-gray-500'>{pizza.description || 'No description available'}</p>
          </div>
        ))
      )}
    </>
  );
}
