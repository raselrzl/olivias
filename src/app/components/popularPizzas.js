import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';

// Static pizza data
const pizzaData = [
  {
    title: 'Margherita',
    price: 'SEK125',
    description: 'Classic pizza with tomato sauce and mozzarella cheese.',
    src: 'images/pizza1.png',
  },
  {
    title: 'Pepperoni',
    price: 'SEK125',
    description: 'Spicy pepperoni with mozzarella cheese and tomato sauce.',
    src: 'images/pizza1.png',
  },
  {
    title: 'BBQ Chicken',
    price: 'SEK125',
    description: 'BBQ sauce, chicken, and fresh vegetables on a crispy crust.',
    src: 'images/pizza1.png',
  },
  {
    title: 'Veggie Supreme',
    price: 'SEK125',
    description: 'Loaded with a variety of fresh vegetables and cheese.',
    src: 'images/pizza1.png',
  },
];

export default function PopularPizzas() {
  const [pizzas, setPizzas] = useState(pizzaData);  // Use static data
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
      {pizzas.map((pizza, index) => (
        <div
          key={index}  // Use index as the key since there's no unique ID
          className='relative bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
        >
          <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
            {pizza.price}
          </button>
          <img src={pizza.src} alt={pizza.title} className='mx-auto mb-4' />
          <h4 className='font-semibold my-2'>{pizza.title}</h4>
          <p className='text-sm text-gray-500'>{pizza.description}</p>
        </div>
      ))}
    </>
  );
}
