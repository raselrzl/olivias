import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/loading-spinner';  // Import the LoadingSpinner component
import { BASE_API_URL } from '@/lib/utils';

export default function Extras() {
  const [extras, setExtras] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_API_URL}/api/data`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', JSON.stringify(data, null, 2)); // More detailed log

        if (Array.isArray(data)) {
          const extrasCategory = data.find(category => category.category === 'Extras');
          console.log('Extras data:', JSON.stringify(extrasCategory, null, 2)); // More detailed log

          if (extrasCategory && Array.isArray(extrasCategory.items)) {
            setExtras(extrasCategory.items);
          } else {
            console.error('Extras category does not contain valid items:', extrasCategory);
            setError('No valid items found for Extras category');
          }
        } else {
          console.error('Fetched data is not an array:', data);
          setError('Unexpected data format');
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
  if(!BASE_API_URL){
    return null;
}
  return (
    <>
      {extras.length === 0 ? (
        <div className='text-center'>No extras available.</div>
      ) : (
        extras.map((extra, index) => (
          <div
            key={index}  // Using index as key since there’s no unique ID
            className='relative bg-gray-200 p-4 text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
          >
            <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
              {extra.price}
            </button>

            <img 
              src={extra.src.startsWith('/') ? extra.src : `/${extra.src}`} 
              alt={extra.title} 
              className='mx-auto mb-2 h-20 w-20 object-cover' 
            />

            <h4 className='font-semibold my-2'>{extra.title}</h4>

            <p className='text-sm text-gray-500'>{extra.description}</p>
          </div>
        ))
      )}
    </>
  );
}
