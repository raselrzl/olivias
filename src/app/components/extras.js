import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/loading-spinner';  // Import the LoadingSpinner component

export default function Extras() {
  const [extras, setExtras] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/data');

        if (!response.ok) {
          // If the response is not OK, throw an error with the status text
          throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();

          // Find the Extras category from the fetched data
          const extrasCategory = data.find(category => category.category === 'Extras');
          console.log('Extras data:', extrasCategory); // Log Extras data to the console

          // Extract the items from the Extras category if it exists
          const extrasData = extrasCategory ? extrasCategory.items : [];
          setExtras(extrasData);
        } else {
          // If the response is not JSON, throw an error
          const text = await response.text();
          throw new Error(`Unexpected response: ${text}`);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;  // Show the spinner while loading
  }

  if (error) {
    return <div className='text-red-500 text-center'>Error: {error}</div>;  // Show the error message
  }

  return (
    <>
      {extras.map((extra, index) => (
        <div
          key={index}  // Use index as the key since there's no unique ID
          className='relative bg-gray-200 p-4 text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
        >
          {/* Price Button */}
          <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
            {extra.price}
          </button>

          {/* Image */}
          <img src={extra.src} alt={extra.title} className='mx-auto mb-2 h-20 w-20 object-cover' />

          {/* Title */}
          <h4 className='font-semibold text-md my-1'>{extra.title}</h4>

          {/* Description */}
          <p className='text-xs text-gray-500'>{extra.description}</p>
        </div>
      ))}
    </>
  );
}
