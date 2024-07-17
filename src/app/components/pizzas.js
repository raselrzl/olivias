import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/loading-spinner';  // Import the LoadingSpinner component

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        // Log the entire data object to the console for debugging
        console.log('Fetched data:', data);

        // Extract pizza data from the API response
        const pizzasCategory = data.find(category => category.category === 'Pizzas');
        console.log('Pizzas data:', pizzasCategory);

        const pizzasData = pizzasCategory ? pizzasCategory.items : [];
        setPizzas(pizzasData);  // Set the pizzas data from the API response
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);  // Set error message if fetching data fails
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div><LoadingSpinner /></div>;  // Show the spinner while loading
  }

  if (error) {
    return <div>Error: {error}</div>;  // Show the error message
  }

  return (
    <>
      {pizzas.map((pizza, index) => (
        <div
          key={index}  // Use index as the key since there's no unique ID
          className='relative bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
        >
          {/* Price Button */}
          <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
            {pizza.price}
          </button>

          {/* Pizza Image */}
          <img src={pizza.src} alt={pizza.title} className='mx-auto mb-4' />

          {/* Pizza Title */}
          <h4 className='font-semibold my-2'>{pizza.title}</h4>

          {/* Description */}
          <p className='text-sm text-gray-500'>{pizza.description}</p>
        </div>
      ))}
    </>
  );
}
