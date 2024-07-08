import { useState, useEffect } from 'react';

export default function Burgers() {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    const fetchBurgers = async () => {
      const res = await fetch('/api/burgers');
      const data = await res.json();
      setBurgers(data);
    };

    fetchBurgers();
  }, []);

  return (
    <>
      {burgers.map((burger, index) => (
        <div
          key={index}
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
