import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';
import { BASE_API_URL } from '@/lib/utils';

export default function Deserts() {
  const [deserts, setDeserts] = useState([]);
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
        // Log the entire data object to the console for debugging
        console.log('Fetched data:', data);

        // Check if the fetched data is an array
        if (Array.isArray(data)) {
          // Find the Deserts category
          const desertsCategory = data.find(category => category.category === 'Deserts');
          console.log('Deserts data:', desertsCategory);

          // Extract the items from the Deserts category if it exists
          const desertsData = desertsCategory ? desertsCategory.items : [];
          setDeserts(desertsData);  // Set the Deserts data to state
        } else {
          console.error('Fetched data is not an array:', data);
          setError('Unexpected data format');
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('Error fetching data: ' + err.message);  // Set error message if fetching data fails
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
      {deserts.map((desert, index) => (
        <div
          key={index}  // Use index as the key since there's no unique ID
          className='relative bg-gray-200 p-4 text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
        >
          <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
            {desert.price}
          </button>

          {/* Ensure the image path starts with a leading slash */}
          <img 
            src={desert.src.startsWith('/') ? desert.src : `/${desert.src}`} 
            alt={desert.title} 
            className='mx-auto mb-2 h-20 w-20 object-cover' 
          />

          <h4 className='font-semibold my-2'>{desert.title}</h4>

          <p className='text-sm text-gray-500'>{desert.description}</p>
        </div>
      ))}
    </>
  );
}
