const pizzaData = [
    {
      id: 1,
      title: 'Margherita',
      price: 'SEK125',
      description: 'Classic pizza with tomato sauce and mozzarella cheese.',
      imageUrl: '/pizza1.png',
    },
    {
      id: 2,
      title: 'Pepperoni',
      price: 'SEK125',
      description: 'Spicy pepperoni with mozzarella cheese and tomato sauce.',
      imageUrl: '/pizza1.png',
    },
    {
      id: 3,
      title: 'BBQ Chicken',
      price: 'SEK125',
      description: 'BBQ sauce, chicken, and fresh vegetables on a crispy crust.',
      imageUrl: '/pizza1.png',
    },
    {
      id: 4,
      title: 'Veggie Supreme',
      price: 'SEK125',
      description: 'Loaded with a variety of fresh vegetables and cheese.',
      imageUrl: '/pizza1.png',
    },
    {
      id: 5,
      title: 'Hawaiian',
      price: 'SEK125',
      description: 'Ham, pineapple, and cheese on a classic crust.',
      imageUrl: '/pizza1.png',
    },
    {
      id: 6,
      title: 'Four Cheese',
      price: 'SEK125',
      description: 'A blend of four delicious cheeses on a cheesy base.',
      imageUrl: '/pizza1.png',
    },
    {
      id: 7,
      title: 'Seafood Special',
      price: 'SEK125',
      description: 'A mix of fresh seafood with mozzarella cheese and tomato sauce.',
      imageUrl: '/pizza1.png',
    },
    {
      id: 8,
      title: 'Spicy Italian',
      price: 'SEK125',
      description: 'Spicy Italian sausage with cheese and tomato sauce.',
      imageUrl: '/pizza1.png',
    },
    {
      id: 9,
      title: 'Meat Lover\'s',
      price: 'SEK125',
      description: 'A carnivore’s delight with various meats and cheese.',
      imageUrl: '/pizza1.png',
    },
    {
      id: 10,
      title: 'Classic Cheese',
      price: 'SEK125',
      description: 'A classic cheese pizza with a crispy crust.',
      imageUrl: '/pizza1.png',
    },
  ];
  
  export default function Pizzas() {
    return (
      <>
        {pizzaData.map(pizza => (
          <div
            key={pizza.id}
            className='relative bg-gray-200 p-4 text-center rounded-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'
          >
            {/* Price Button */}
            <button className='absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white font-semibold py-1 px-2 md:py-1 md:px-3 shadow-md hover:bg-amber-600'>
              {pizza.price}
            </button>
  
            {/* Pizza Image */}
            <img src={pizza.imageUrl} alt={pizza.title} className='mx-auto mb-4' />
  
            {/* Pizza Title */}
            <h4 className='font-semibold my-2'>{pizza.title}</h4>
  
            {/* Description */}
            <p className='text-sm text-gray-500'>{pizza.description}</p>
          </div>
        ))}
      </>
    );
  }
  