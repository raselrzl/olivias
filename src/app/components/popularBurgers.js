const popularBurgersData = [
    {
      id: 1,
      title: 'Tryffel 139 SEK',
      price: 'SEK125',
      description: 'Chaddder, Piklad Rodlok, Tryffel mayo, Ostcream',
      imageUrl: 'images/burger1.png',
    },
    {
      id: 2,
      title: 'Tryffel 139 SEK',
      price: 'SEK125',
      description: 'Chaddder, Piklad Rodlok, Tryffel mayo, Ostcream',
      imageUrl: 'images/burger1.png',
    },
    {
      id: 3,
      title: 'Tryffel 139 SEK',
      price: 'SEK125',
      description: 'Chaddder, Piklad Rodlok, Tryffel mayo, Ostcream',
      imageUrl: 'images/burger1.png',
    },
    {
      id: 4,
      title: 'Tryffel 139 SEK',
      price: 'SEK125',
      description: 'Chaddder, Piklad Rodlok, Tryffel mayo, Ostcream',
      imageUrl: 'images/burger1.png',
    },
  ];
  
  export default function PopularBurgers() {
    return (
      <>
        {popularBurgersData.map(burger => (
          <div
            key={burger.id}
            className='relative bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
          >
            {/* Price Button */}
            <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
              {burger.price}
            </button>
  
            {/* Burger Image */}
            <img src={burger.imageUrl} alt='burger' className='mx-auto mb-4' />
  
            {/* Burger Title */}
            <h4 className='font-semibold my-2'>{burger.title}</h4>
  
            {/* Description */}
            <p className='text-sm text-gray-500'>{burger.description}</p>
          </div>
        ))}
      </>
    );
  }
  