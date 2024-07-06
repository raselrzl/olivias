const deserts = [
    {
      src: '/milkshake.jpg',
      title: 'Milkshake',
      price: 'SEK125',
      description: 'A creamy milkshake made with the finest ingredients.',
    },
    {
      src: '/milkshake.jpg',
      title: 'Milkshake',
      price: 'SEK125',
      description: 'A creamy milkshake made with the finest ingredients.',
    },
    {
      src: '/milkshake.jpg',
      title: 'Milkshake',
      price: 'SEK125',
      description: 'A creamy milkshake made with the finest ingredients.',
    },
    {
      src: '/milkshake.jpg',
      title: 'Milkshake',
      price: 'SEK125',
      description: 'A creamy milkshake made with the finest ingredients.',
    },
  ];
  
  export default function Deserts() {
    return (
      <>
        {deserts.map((desert, index) => (
          <div
            key={index}
            className='relative bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
          >
            {/* Price Button */}
            <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
              {desert.price}
            </button>
  
            {/* Dessert Image */}
            <img src={desert.src} alt={desert.title} className='mx-auto mb-4' />
  
            {/* Dessert Title */}
            <h4 className='font-semibold my-2'>{desert.title}</h4>
  
            {/* Description */}
            <p className='text-sm text-gray-500'>{desert.description}</p>
          </div>
        ))}
      </>
    );
  }
  