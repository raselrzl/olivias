// scripts/seedBurgers.js
import fetch from 'node-fetch';

const burgers = [
  {
    src: 'images/burger1.png',
    title: 'Tryffel',
    price: 'SEK125',
    description: 'Burger bliss like never before with our smash burgers.',
  },
  {
    src: 'images/burger1.png',
    title: 'Margherita',
    price: 'SEK125',
    description: 'Burger bliss like never before with our smash burgers.',
  },
  {
    src: 'images/burger1.png',
    title: 'Chili',
    price: 'SEK125',
    description: 'Burger bliss like never before with our smash burgers.',
  },
  {
    src: 'images/burger1.png',
    title: 'Cheese',
    price: 'SEK125',
    description: 'Burger bliss like never before with our smash burgers.',
  },
  // ... add more burger objects
];


async function seedBurgers() {
  for (const burger of burgers) {
    await fetch('http://localhost:3000/api/burgers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(burger),
    });
  }
}

seedBurgers()
  .then(() => {
    console.log('Burgers seeded successfully');
  })
  .catch((error) => {
    console.error('Error seeding burgers:', error);
  });