import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';
import { BASE_API_URL } from '@/lib/utils';
import Image from 'next/image';

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_API_URL}/api/data`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Log the fetched data
        console.log('Fetched data:', data);

        if (Array.isArray(data)) {
          const drinksCategory = data.find(category => category.category === 'Drinks');
          
          // Check if drinksCategory is an object with items array
          if (drinksCategory && Array.isArray(drinksCategory.items)) {
            setDrinks(drinksCategory.items);
          } else {
            throw new Error('Invalid data structure for Drinks category');
          }
        } else {
          throw new Error('Expected data to be an array');
        }
      })
      .catch((err) => {
        console.log('Fetch error:', err);
        setError('Error fetching data: ' + err.message);
      })
      .finally(() => {
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
      {drinks.length === 0 ? (
        <div className='text-center text-gray-500'>No drinks available</div>
      ) : (
        drinks.map((drink, index) => (
          <div
  key={index} // Use index as the key if there is no unique ID
  className="relative bg-[#F7DAD0] rounded-lg p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
>
  {/* Price Button */}
  <button className="absolute top-4 right-4 bg-black text-[#EAC6B5] font-medium py-1 px-3 rounded-lg shadow-md hover:bg-[#D4A59A] text-xs">
    {drink.price}
  </button>

  {/* Drink Image */}
  <Image
    src={drink.src}
    alt={drink.title}
    className="mx-auto mb-3 w-28 h-28 object-cover rounded-full shadow-sm"
  />

  {/* Drink Title */}
  <h4 className="font-semibold text-lg text-black mb-2">{drink.title}</h4>

  {/* Description */}
  <p className="text-sm text-gray-700">
    {drink.description || "No description available"}
  </p>
</div>

        ))
      )}
    </>
  );
}
