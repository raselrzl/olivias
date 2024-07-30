import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/loading-spinner';  // Import the LoadingSpinner component

export default function Extras() {
  const [extras, setExtras] = useState([]);
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
          // Find the Extras category
          const extrasCategory = data.find(category => category.category === 'Extras');
          console.log('Extras data:', extrasCategory);

          // Extract the items from the Extras category if it exists
          const extrasData = extrasCategory ? extrasCategory.items : [];
          setExtras(extrasData);  // Set the Extras data to state
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
      {extras.map((extra, index) => (
        <div
          key={index}  // Use index as the key since there's no unique ID
          className='relative bg-gray-200 p-4 text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
        >
          <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
            {extra.price}
          </button>

          <img src={extra.src} alt={extra.title} className='mx-auto mb-2 h-20 w-20 object-cover' />

          <h4 className='font-semibold my-2'>{extra.title}</h4>

          <p className='text-sm text-gray-500'>{extra.description}</p>
        </div>
      ))}
    </>
  );
}
