import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/loading-spinner';  // Import the LoadingSpinner component
import { BASE_API_URL } from '@/lib/utils';

export default function PopularBurgers() {
  const [burgers, setBurgers] = useState([]);
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
          // Find the Popular Burgers category
          const popularBurgersCategory = data.find(category => category.category === 'Popular Burgers');
          console.log('Popular Burgers data:', popularBurgersCategory);

          // Extract the items from the Popular Burgers category if it exists
          const popularBurgersData = popularBurgersCategory ? popularBurgersCategory.items : [];
          setBurgers(popularBurgersData);  // Set the Popular Burgers data to state
        } else {
          console.log('Fetched data is not an array:', data);
          setError('Unexpected data format');
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log('Fetch error:', err);
        setError('Error fetching data: ' + err.message);  // Set error message if fetching data fails
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div><LoadingSpinner /></div>;  // Show the spinner while loading
  }

  if (error) {
    return <div className='text-red-500 text-center'>Error: {error}</div>;  // Show the error message
  }
  if(!BASE_API_URL){
    return null;
}
  return (
    <>
      {burgers.map((burger, index) => (
        <div
        key={index} // Use index as the key since there's no unique ID
        className="relative bg-[#F7DAD0] rounded-lg p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        {/* Price Button */}
        <button className="absolute top-4 right-4 bg-black text-[#EAC6B5] font-medium py-1 px-3 rounded-lg shadow-md hover:bg-[#D4A59A]">
          {burger.price}
        </button>
      
        {/* Burger Image */}
        <img
          src="olivia/o2.jpg"
          alt={burger.title}
          className="mx-auto mb-3 w-28 h-28 object-cover  shadow-sm"
        />
      
        {/* Burger Title */}
        <h4 className="font-semibold text-lg text-black mb-2">{burger.title}</h4>
      
        {/* Description */}
        {/* <p className="text-sm text-gray-700">{burger.description || "No description available"}</p> */}
      </div>
      
      ))}
    </>
  );
}
