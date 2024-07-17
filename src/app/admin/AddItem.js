"use client";
import { useState } from 'react';
export default function AddItem(){
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [src, setSrc] = useState(''); // Changed imageUrl to src
    const [submitted, setSubmitted] = useState('');
    const [error, setError] = useState('');

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
        setTitle('');
        setPrice('');
        setDescription('');
        setSrc(''); // Reset src on category change
        setSubmitted('');
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!category) {
            setError('Please select a category');
            return;
        }

        const priceWithSEK = price.startsWith('SEK') ? price : `SEK${price.trim()}`;

        if (title && src) {  // Changed imageUrl to src
            try {
                const response = await fetch('/api/menu-items', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ category, title, price: priceWithSEK, description, src }),  // Include src in the payload
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
            setSrc(''); // Clear src after submission
            setError('');
        } else {
            setError('Please fill in all fields correctly');
        }
    };

    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen py-4 sm:py-6 lg:py-8">
                <h1 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-200 uppercase mb-4'>
                    Add Menu Items
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
                                placeholder="Name of the menu item: Example: Tryffel"
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
                                type="text"
                                placeholder="Enter numbers"
                                value={price}
                                onChange={(e) => setPrice(e.target.value.replace(/[^0-9.]/g, ''))}  // Remove non-numeric characters
                            />
                        </div>

                        {category !== 'Drinks' && category !== 'Deserts' && (
                            <div className="mb-4">
                                <label className="block text-sm sm:text-base md:text-lg font-medium text-primary" htmlFor="description">
                                    Description
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="description"
                                    placeholder="Example: Piccante Salami, Ndjua, Chilihonung"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        )}

                        <div className="mb-4">
                            <label className="block text-sm sm:text-base md:text-lg font-medium text-primary" htmlFor="src">
                                Image Source (URL)
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="src"
                                type="text"
                                placeholder="Example: images/burger.png"
                                value={src}  // Changed imageUrl to src
                                onChange={(e) => setSrc(e.target.value)}  // Changed imageUrl to src
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark focus:outline-none focus:shadow-outline"
                        >
                            Add to {category}  {/* Changed button text to reflect the category */}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}