"use client";
import { useState } from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

export default function MenuItemsForm() {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState('');
    const [error, setError] = useState('');

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
        setTitle('');
        setPrice('');
        setDescription('');
        setSubmitted('');
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!category) {
            setError('Please select a category');
            return;
        }
        if (title && price) {
            try {
                const response = await fetch('/api/menu-items', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ category, title, price, description }),
                });

                if (response.ok) {
                    setSubmitted(`Successfully added to the ${category}`);
                } else {
                    setError('Error adding item');
                }
            } catch (err) {
                setError('An unexpected error occurred');
            }

            setCategory('');
            setTitle('');
            setPrice('');
            setDescription('');
            setError('');
        } else {
            setError('Please fill in all fields');
        }
    };

    return (
        <>
            <Header />
            <h1 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-200 uppercase mb-4'>
                Admin Page
            </h1>
            <div className="flex flex-col items-center justify-center min-h-screen py-4 sm:py-6 lg:py-8">
                <h1 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-200 uppercase mb-4'>
                    Add Menu Items - Please Select a Category!
                </h1>
                <div className="flex flex-col items-center px-6">
                    <div className="flex flex-wrap justify-center mb-6 gap-2 sm:gap-4">
                        {/* Category buttons */}
                        <button
                            className={`p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white ${category === 'Pizzas' ? 'bg-primary-dark' : 'bg-primary'}`}
                            onClick={() => handleCategoryClick('Pizzas')}
                        >
                            Pizza
                        </button>
                        <button
                            className={`p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white ${category === 'Burgers' ? 'bg-primary-dark' : 'bg-primary'}`}
                            onClick={() => handleCategoryClick('Burgers')}
                        >
                            Burger
                        </button>
                        <button
                            className={`p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white ${category === 'Extras' ? 'bg-primary-dark' : 'bg-primary'}`}
                            onClick={() => handleCategoryClick('Extras')}
                        >
                            Extra
                        </button>
                        <button
                            className={`p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white ${category === 'Popular Pizzas' ? 'bg-primary-dark' : 'bg-primary'}`}
                            onClick={() => handleCategoryClick('Popular Pizzas')}
                        >
                            Popular Pizzas
                        </button>
                        <button
                            className={`p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white ${category === 'Popular Burgers' ? 'bg-primary-dark' : 'bg-primary'}`}
                            onClick={() => handleCategoryClick('Popular Burgers')}
                        >
                            Popular Burgers
                        </button>
                        <button
                            className={`p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white ${category === 'Deserts' ? 'bg-primary-dark' : 'bg-primary'}`}
                            onClick={() => handleCategoryClick('Deserts')}
                        >
                            Desert
                        </button>
                        <button
                            className={`p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white ${category === 'Drinks' ? 'bg-primary-dark' : 'bg-primary'}`}
                            onClick={() => handleCategoryClick('Drinks')}
                        >
                            Drinks
                        </button>
                    </div>
                    <form className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" onSubmit={handleSubmit}>
                        {submitted && (
                            <p className="mb-4 text-green-500 text-center">{submitted}</p>
                        )}
                        {error && (
                            <p className="mb-4 text-red-500 text-center">{error}</p>
                        )}

                        <div className="mb-4">
                            <label className="block text-sm sm:text-base md:text-lg font-medium text-primary" htmlFor="category">
                                Category
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="category"
                                type="text"
                                placeholder="Category"
                                value={category}
                                readOnly
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm sm:text-base md:text-lg font-medium text-primary" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm sm:text-base md:text-lg font-medium text-primary" htmlFor="price">
                                Price
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price"
                                type="number"
                                placeholder="Price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        {category !== 'Deserts' && category !== 'Drinks' && (
                            <div className="mb-6">
                                <label className="block text-sm sm:text-base md:text-lg font-medium text-primary" htmlFor="description">
                                    Description
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="description"
                                    placeholder="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        )}

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark focus:outline-none focus:shadow-outline"
                            >
                                Add Item
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
