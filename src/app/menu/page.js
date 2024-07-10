"use client";
import { useState, lazy, Suspense } from 'react';
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import LoadingSpinner from "../components/loading-spinner";

const Burgers = lazy(() => import("../components/burgers"));
const Deserts = lazy(() => import("../components/deserts"));
const Extras = lazy(() => import("../components/extras"));
const Pizzas = lazy(() => import("../components/pizzas"));
const Drinks = lazy(() => import("../components/drinks"));

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <Header />

            <div className="pb-24">
                <div className='flex flex-col items-center justify-center text-sm m-2 sm:flex-row'>
                    <div className="flex flex-row">
                        <button
                            className={`m-2 place-items-center flex uppercase gap-2 rounded text-white px-4 py-2 items-center ${selectedCategory === 'All' ? 'bg-primary-dark' : 'bg-primary'}`}
                            onClick={() => handleCategoryChange('All')}
                        >
                            All
                        </button>
                        <button
                            className={`m-2 place-items-center flex uppercase gap-2 rounded text-white px-4 py-2 items-center ${selectedCategory === 'Pizzas' ? 'bg-primary-dark' : 'bg-primary'}`}
                            onClick={() => handleCategoryChange('Pizzas')}
                        >
                            Pizzas
                        </button>
                        <button
                            className={`m-2 place-items-center flex uppercase gap-2 rounded text-white px-4 py-2 items-center ${selectedCategory === 'Burgers' ? 'bg-primary-dark' : 'bg-primary'}`}
                            onClick={() => handleCategoryChange('Burgers')}
                        >
                            Burgers
                        </button>
                    </div>
                    <div className="flex flex-row">
                        <button
                            className={`m-2 place-items-center flex uppercase gap-2 rounded text-white px-4 py-2 items-center ${selectedCategory === 'Extras' ? 'bg-primary-dark' : 'bg-primary'}`}
                            onClick={() => handleCategoryChange('Extras')}
                        >
                            Extras
                        </button>
                        <button
                            className={`m-2 place-items-center flex uppercase gap-2 rounded text-white px-4 py-2 items-center ${selectedCategory === 'Deserts' ? 'bg-primary-dark' : 'bg-primary'}`}
                            onClick={() => handleCategoryChange('Deserts')}
                        >
                            Deserts
                        </button>
                        <button
                            className={`m-2 place-items-center flex uppercase gap-2 rounded text-white px-4 py-2 items-center ${selectedCategory === 'Drinks' ? 'bg-primary-dark' : 'bg-primary'}`}
                            onClick={() => handleCategoryChange('Drinks')}
                        >
                            Drinks
                        </button>
                    </div>
                </div>

                <Suspense fallback={<LoadingSpinner />}>
                    {selectedCategory === 'All' && (
                        <>
                            <div className='fade-in grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-6 md:px-10 lg:px-20 2xl:px-80'>
                                <Pizzas />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    className='w-1/4 m-10 bg-primary flex justify-center items-center uppercase gap-2 rounded text-white px-4 py-2'
                                    onClick={() => handleCategoryChange('Burgers')}
                                >
                                    Burgers
                                </button>
                            </div>

                            <div className='fade-in grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-6 md:px-10 lg:px-20 2xl:px-80'>
                                <Burgers />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className='w-1/4 m-10 bg-primary flex justify-center items-center uppercase gap-2 rounded text-white px-4 py-2'
                                    onClick={() => handleCategoryChange('Extras')}
                                >
                                    Extras
                                </button>
                            </div>

                            <div className='fade-in grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-6 md:px-10 lg:px-20 2xl:px-80'>
                                <Extras />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    className='w-1/4 m-10 bg-primary flex justify-center items-center uppercase gap-2 rounded text-white px-4 py-2'
                                    onClick={() => handleCategoryChange('Deserts')}
                                >
                                    Deserts
                                </button>
                            </div>

                            <div className='fade-in grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-6 md:px-10 lg:px-20 2xl:px-80'>
                                <Deserts />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className='w-1/4 m-10 bg-primary flex justify-center items-center uppercase gap-2 rounded text-white px-4 py-2'
                                    onClick={() => handleCategoryChange('Drinks')}
                                >
                                    Drinks
                                </button>
                            </div>

                            <div className='fade-in grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-6 md:px-10 lg:px-20 2xl:px-80'>
                                <Drinks />
                            </div>
                        </>
                    )}

                    {selectedCategory === 'Pizzas' && (
                        <div className='fade-in grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-6 md:px-10 lg:px-20 2xl:px-80'>
                            <Pizzas />
                        </div>
                    )}

                    {selectedCategory === 'Burgers' && (
                        <div className='fade-in grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-6 md:px-10 lg:px-20 2xl:px-80'>
                            <Burgers />
                        </div>
                    )}

                    {selectedCategory === 'Extras' && (
                        <div className='fade-in grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-6 md:px-10 lg:px-20 2xl:px-80'>
                            <Extras />
                        </div>
                    )}

                    {selectedCategory === 'Deserts' && (
                        <div className='fade-in grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-6 md:px-10 lg:px-20 2xl:px-80'>
                            <Deserts />
                        </div>
                    )}

                    {selectedCategory === 'Drinks' && (
                        <div className='fade-in grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-6 md:px-10 lg:px-20 2xl:px-80'>
                            <Drinks />
                        </div>
                    )}
                </Suspense>

                <div className='my-10 mx-6'>
                    <div className='bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-6 shadow-lg mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 max-w-screen-lg'>
                        <h1 className='mb-2 my-2 text-amber-100 text-xl text-center text-primary uppercase'>Note:</h1>
                        <p className='mb-6 my-6 text-amber-100 text-sm text-center uppercase '>
                            At Jay's, we offer two types of pizza bread to cater to your preferences: Italiensk Surdeg and Gluten-Free. <br /> <br />

                            <span className='text-primary uppercase'>Italiensk Surdeg: </span>Italiensk Surdeg: This classic Italian sourdough bread is a favorite for its rich flavor and perfect crust. Please note, selecting this option will incur an additional charge of 15 kr.
                            <br /><br /> <span className='text-primary uppercase'>Gluten-Free:</span> For those with dietary restrictions, our gluten-free pizza bread is an excellent choice. Please note, selecting this option will incur an additional charge of 20 kr.
                            <br /><br />Additionally, we are pleased to offer gluten-free burger bread for our burger enthusiasts who need or prefer gluten-free options.</p>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
