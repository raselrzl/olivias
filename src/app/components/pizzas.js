import { useState, useEffect } from 'react';

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      const res = await fetch('/api/pizzas');
      const data = await res.json();
      setPizzas(data);
    };

    fetchPizzas();
  }, []);

  return (
    <>
      {pizzas.map((pizza, index) => (
        <div
          key={index}
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
