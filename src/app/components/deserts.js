// src/app/components/Deserts.js

import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';
import { menuItems } from '../menuItems/MenuItem.js'; 

export default function Deserts() {
  const [deserts, setDeserts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const desertsCategory = menuItems.find(category => category.category === 'Deserts');
      const desertsData = desertsCategory ? desertsCategory.items : [];
      setDeserts(desertsData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div><LoadingSpinner /></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {deserts.map((desert, index) => (
        <div
          key={index}  // Use index as the key since there's no unique ID
          className='relative bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
        >
          <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
            {desert.price}
          </button>

          <img src={desert.src} alt={desert.title} className='mx-auto mb-4' />

          <h4 className='font-semibold my-2'>{desert.title}</h4>

          <p className='text-sm text-gray-500'>{desert.description}</p>
        </div>
      ))}
    </>
  );
}
