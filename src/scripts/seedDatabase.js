// src/scripts/seedDatabase.js

import { PrismaClient } from '@prisma/client';
import { menuItems } from '../menuItems/MenuItems.js';

const prisma = new PrismaClient();

async function seedDatabase() {
  console.log('Seeding database...');

  // Seed Pizzas
  for (const pizza of menuItems.pizzas) {
    await prisma.pizza.create({
      data: pizza,
    });
  }

  // Seed Burgers
  for (const burger of menuItems.burgers) {
    await prisma.burger.create({
      data: burger,
    });
  }

  // Seed Extras
  for (const extra of menuItems.extras) {
    await prisma.extra.create({
      data: extra,
    });
  }

  // Seed Deserts
  for (const desert of menuItems.deserts) {
    await prisma.desert.create({
      data: desert,
    });
  }

  console.log('Database seeded successfully!');
}

seedDatabase()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
