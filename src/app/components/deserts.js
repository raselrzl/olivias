import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/loading-spinner'; // Import the LoadingSpinner component

// Static desert data
const DesertsData = [
  {
    title: 'Daim',
    price: 'SEK125',
    description: 'Classic pizza with tomato sauce and mozzarella cheese.',
    src: 'images/milkshake.jpg',
  },
  {
    title: 'Dumle',
    price: 'SEK125',
    description: 'Spicy pepperoni with mozzarella cheese and tomato sauce.',
    src: 'images/milkshake.jpg',
  },
  {
    title: 'Pennut',
    price: 'SEK125',
    description: 'BBQ sauce, chicken, and fresh vegetables on a crispy crust.',
    src: 'images/milkshake.jpg',
  },
  {
    title: 'Oreo',
    price: 'SEK125',
    description: 'Loaded with a variety of fresh vegetables and cheese.',
    src: 'images/milkshake.jpg',
  },
];

export default function Deserts() {
  const [deserts, setDeserts] = useState(DesertsData);  // Use static data
  const [loading, setLoading] = useState(false);  // Set loading to false as we are not fetching data
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate a loading state
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);  // Short delay for demo purposes
  }, []);

  if (loading) {
    return <LoadingSpinner />;  // Show the spinner while loading
  }

  if (error) {
    return <div className='text-red-500 text-center'>Error: {error}</div>;
  }

  return (
    <>
      {deserts.map((desert, index) => (
        <div
          key={index}  // Use index as the key since there's no unique ID
          className='relative bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
        >
          {/* Price Button */}
          <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
            {desert.price}
          </button>

          {/* Dessert Image */}
          <img src={desert.src} alt={desert.title} className='mx-auto mb-4' />

          {/* Dessert Title */}
          <h4 className='font-semibold text-lg mb-2'>{desert.title}</h4>

          {/* Description */}
          <p className='text-sm text-gray-500 mb-2'>{desert.description}</p>
        </div>
      ))}
    </>
  );
}
