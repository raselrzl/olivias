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
        key={index} // Use index as the key since there's no unique ID
        className="relative bg-[#F7DAD0] rounded-lg p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        {/* Price Button */}
        <button className="absolute top-4 right-4 bg-black text-[#EAC6B5] font-medium py-1 px-3 rounded-lg shadow-md hover:bg-[#D4A59A]">
          {desert.price}
        </button>
      
        {/* Dessert Image */}
        <img
          /* src={desert.src.startsWith("/") ? desert.src : `/${desert.src}`} */
          src="olivia/des1.jpg"
          alt={desert.title}
          className="mx-auto mb-3 w-28 h-28 object-cover rounded-full shadow-sm"
        />
      
        {/* Dessert Title */}
        <h4 className="font-semibold text-lg text-black mb-2">{desert.title}</h4>
      
        {/* Description */}
        <p className="text-sm text-gray-700">
          {desert.description || "No description available"}
        </p>
      </div>
      
      ))}
    </>
  );
}
