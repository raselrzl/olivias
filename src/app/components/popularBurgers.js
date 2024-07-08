import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';

// Static popular burgers data
const PopularBurgersData = [
  {
    title: 'Classic Cheeseburger',
    price: 'SEK130',
    description: 'A delicious cheeseburger with a juicy beef patty, melted cheese, lettuce, tomato, and pickles.',
    src: 'images/burger1.png',
  },
  {
    title: 'BBQ Bacon Burger',
    price: 'SEK150',
    description: 'A smoky BBQ bacon burger with a beef patty, crispy bacon, cheddar cheese, and BBQ sauce.',
    src: 'images/burger1.png',
  },
  {
    title: 'Veggie Burger',
    price: 'SEK120',
    description: 'A hearty veggie burger with a black bean patty, avocado, lettuce, and tomato.',
    src: 'images/burger1.png',
  },
  {
    title: 'Spicy Jalapeño Burger',
    price: 'SEK140',
    description: 'A spicy burger with jalapeños, pepper jack cheese, and a zesty sauce.',
    src: 'images/burger1.png',
  },
];

export default function PopularBurgers() {
  const [burgers, setBurgers] = useState(PopularBurgersData);  // Use static data
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
    return <div><LoadingSpinner /></div>;  // Show the spinner while loading
  }

  if (error) {
    return <div className='text-red-500 text-center'>Error: {error}</div>;  // Show the error message
  }

  return (
    <>
      {burgers.map((burger, index) => (
        <div
          key={index}
          className='relative bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
        >
          {/* Price Button */}
          <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
            {burger.price}
          </button>

          {/* Burger Image */}
          <img src={burger.src} alt={burger.title} className='mx-auto mb-4' />

          {/* Burger Title */}
          <h4 className='font-semibold text-lg mb-2'>{burger.title}</h4>

          {/* Description */}
          <p className='text-sm text-gray-500 mb-2'>{burger.description}</p>
        </div>
      ))}
    </>
  );
}
