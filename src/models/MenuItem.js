// src/models/MenuItem.js
import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [
    {
      title: { type: String, required: true },
      price: { type: String, required: true },
      description: { type: String, required: true },
      src: { type: String, required: true },
    },
  ],
});

const MenuItem = mongoose.models.MenuItem || mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;