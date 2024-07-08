import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';

// Static burger data
const BurgersData = [
  {
    title: 'Tryffel',
    price: 'SEK125',
    description: 'Classic pizza with tomato sauce and mozzarella cheese.',
    src: 'images/burger1.png',
  },
  {
    title: 'Cheese',
    price: 'SEK125',
    description: 'Spicy pepperoni with mozzarella cheese and tomato sauce.',
    src: 'images/burger1.png',
  },
  {
    title: 'BBQ',
    price: 'SEK125',
    description: 'BBQ sauce, chicken, and fresh vegetables on a crispy crust.',
    src: 'images/burger1.png',
  },
  {
    title: 'Chilli',
    price: 'SEK125',
    description: 'Loaded with a variety of fresh vegetables and cheese.',
    src: 'images/burger1.png',
  },
];

export default function Burgers() {
  const [burgers, setBurgers] = useState(BurgersData);  // Use static data
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate a loading state
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);  // Short delay for demo purposes
  }, []);

  if (loading) {
    return <div><LoadingSpinner /></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {burgers.map((burger, index) => (
        <div
          key={index}  // Use index as the key since there's no unique ID
          className='relative bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
        >
          <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
            {burger.price}
          </button>

          <img src={burger.src} alt={burger.title} className='mx-auto mb-4' />

          <h4 className='font-semibold my-2'>{burger.title}</h4>

          <p className='text-sm text-gray-500'>{burger.description}</p>
        </div>
      ))}
    </>
  );
}
