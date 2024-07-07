const extras = [
    {
      src: 'images/crispyFries1.png',
      title: 'Crispy Fries',
      price: 'SEK125',
      description: 'Burger bliss like never before with our smash burgers.',
    },
    {
      src: 'images/crispyFries1.png',
      title: 'Crispy Fries',
      price: 'SEK125',
      description: 'Burger bliss like never before with our smash burgers.',
    },
    {
      src: 'images/crispyFries1.png',
      title: 'Crispy Fries',
      price: 'SEK125',
      description: 'Burger bliss like never before with our smash burgers.',
    },
    {
      src: 'images/crispyFries1.png',
      title: 'Crispy Fries',
      price: 'SEK125',
      description: 'Burger bliss like never before with our smash burgers.',
    },
  ];
  
  export default function Extras() {
    return (
      <>
        {extras.map((extra, index) => (
          <div
            key={index}
            className='relative bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
          >
            {/* Price Button */}
            <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
              {extra.price}
            </button>
  
            {/* Image */}
            <img src={extra.src} alt={extra.title} className='mx-auto mb-4' />
  
            {/* Title */}
            <h4 className='font-semibold my-2'>{extra.title}</h4>
  
            {/* Description */}
            <p className='text-sm text-gray-500'>{extra.description}</p>
          </div>
        ))}
      </>
    );
  }
  