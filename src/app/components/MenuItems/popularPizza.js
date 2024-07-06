const popularPizzaData = [
    {
      id: 1,
      title: 'Margherita 125 SEK',
      price: 'SEK125',
      description: 'Oregano',
      imageUrl: '/pizza1.png',
    },
    {
      id: 2,
      title: 'Margherita',
      price: 'SEK125',
      description: 'Experience pizza bliss like never before with our Margherita.',
      imageUrl: '/pizza1.png',
    },
    {
      id: 3,
      title: 'Margherita',
      price: 'SEK125',
      description: 'Experience pizza bliss like never before with our Margherita.',
      imageUrl: '/pizza1.png',
    },
    {
      id: 4,
      title: 'Margherita',
      price: 'SEK125',
      description: 'Experience pizza bliss like never before with our Margherita.',
      imageUrl: '/pizza1.png',
    },
  ];
  
  export default function PopularPizzas() {
    return (
      <>
        {popularPizzaData.map(pizza => (
          <div
            key={pizza.id}
            className='relative bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
          >
            <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
              {pizza.price}
            </button>
            <img src={pizza.imageUrl} alt='pizza' className='mx-auto mb-4' />
            <h4 className='font-semibold my-2'>{pizza.title}</h4>
            <p className='text-sm text-gray-500'>{pizza.description}</p>
          </div>
        ))}
      </>
    );
  }
  