import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';

export default function Burgers() {
  const [burgers, setBurgers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        // Log the data structure
        console.log('API data:', data);

        if (Array.isArray(data)) {
          const burgersCategory = data.find(category => category.category === 'Burgers');
          
          if (burgersCategory) {
            setBurgers(burgersCategory.items);
          } else {
            throw new Error('Burgers category not found');
          }
        } else {
          throw new Error('Unexpected data format');
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
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
      {burgers.map((burger, index) => (
        <div
          key={index}  // Use index as the key since there's no unique ID
          className='relative bg-gray-200 p-4 text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
        >
          <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
            {burger.price}
          </button>

          <img src={burger.src} alt={burger.title} className='mx-auto mb-2' />

          <h4 className='font-semibold text-md my-1'>{burger.title}</h4>

          <p className='text-xs text-gray-500'>{burger.description}</p>
        </div>
      ))}
    </>
  );
}
