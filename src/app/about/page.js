"use client";
import { Footer } from "../components/Footer";
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function AboutPage() {
    useEffect(() => {
        const initializeMap = () => {
            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 58.6417, lng: 15.6930 }, // Correct coordinates for Finspångsvägen 484, Svärtinge, Sweden
                zoom: 15,
            });

            new google.maps.Marker({
                position: { lat: 58.6417, lng: 15.6930 }, // Correct coordinates for Finspångsvägen 484, Svärtinge, Sweden
                map,
                title: "Visit Us at Jay's Pizza",
            });
        };

        if (window.google) {
            initializeMap();
        } else {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCPTiLxOo0c9w-KafsLYvdMuV5h0UphSro&callback=initializeMap`;
            script.async = true;
            script.defer = true;
            window.initializeMap = initializeMap;
            document.head.appendChild(script);
        }
    }, []);

    return (
        <div>
            <div className="max-w-7xl mx-auto p-4 mb-4 sm:p-6 lg:p-8 text-amber-200">
                {/* Introduction Section */}
                <section className="mb-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="relative">
                        <Image
                            src="/images/restaurant-interior.jpg"
                            alt="Restaurant Interior"
                            width={1200}
                            height={400}
                            className="w-full h-60 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/50 rounded-t-lg">
                            <h1 className="text-3xl font-bold text-amber-200 mb-4 uppercase">Welcome to JAYS</h1>
                            <p className="text-lg text-amber-200">
                                Discover JAYS, your go-to spot for classic pizzas, unique specials, and irresistible smash burgers right here in Svärtinge. We pride ourselves on crafting delicious dishes with passion.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="mb-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-6">
                        <Image
                            src="/images/ourchef.avif"
                            alt="Our Chef"
                            width={600}
                            height={400}
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="md:ml-6 p-4 text-center md:text-left">
                            <h2 className="text-2xl uppercase font-semibold text-amber-200 mb-4">Our Story</h2>
                            <p className="text-lg text-amber-200">
                                Founded in 2024, JAYS is a beloved spot for classic Special Pizza and Smash Burger.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="mb-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-6">
                        <Image
                            src="/images/ourteam.jpg"
                            alt="Our Team"
                            width={600}
                            height={400}
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="md:ml-6 p-4 text-center md:text-left">
                            <h2 className="text-2xl uppercase font-semibold text-amber-200 mb-4">Meet Our Team</h2>
                            <p className="text-lg text-amber-200">
                                Led by Chef of JAYS, our team serves up the best Pizza and Burger compared to any classic restaurant.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Philosophy Section */}
                <section className="mb-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="flex flex-col items-center p-6">
                        <div className="flex flex-col md:flex-row items-center w-full">
                            <div className="md:ml-6 text-center p-4 md:text-left">
                                <h2 className="text-2xl uppercase font-semibold text-amber-200 mb-4">Our Philosophy</h2>
                                <p className="text-lg text-amber-200">
                                    We’re dedicated to perfecting the art of pizza and smash burgers. Our commitment to quality ingredients and traditional methods ensures every dish is exceptional.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 w-full h-[50vh] flex justify-center items-center">
                            <div className="hexagon-gallery">
                                <div className="hexagon">
                                    <Image
                                        src="/images/freshingredients.avif"
                                        alt="Fresh Ingredients"
                                        width={200}
                                        height={200}
                                        className="hexagon-inset"
                                    />
                                </div>
                                <div className="hexagon">
                                    <Image
                                        src="/images/burger-kött.jpg"
                                        alt="Burger Ingredients"
                                        width={200}
                                        height={200}
                                        className="hexagon-inset"
                                    />
                                </div>
                                <div className="hexagon">
                                    <Image
                                        src="/images/ryggbif.jpg"
                                        alt="Ryggbif"
                                        width={200}
                                        height={200}
                                        className="hexagon-inset"
                                    />
                                </div>
                                <div className="hexagon">
                                    <Image
                                        src="/images/smashedonsteak.jpg"
                                        alt="Smashed Steak"
                                        width={200}
                                        height={200}
                                        className="hexagon-inset"
                                    />
                                </div>
                                <div className="hexagon">
                                    <Image
                                        src="/images/nutella.png"
                                        alt="Nutella"
                                        width={200}
                                        height={200}
                                        className="hexagon-inset"
                                    />
                                </div>
                                <div className="hexagon">
                                    <Image
                                        src="/images/pizza1.png"
                                        alt="Pizza"
                                        width={200}
                                        height={200}
                                        className="hexagon-inset"
                                    />
                                </div>
                                <div className="hexagon">
                                    <Image
                                        src="/images/burger2.png"
                                        alt="Burger"
                                        width={200}
                                        height={200}
                                        className="hexagon-inset"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Engagement Section */}
                <section className="mb-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-6">
                        <Image
                            src="/images/community-engagement-event.jpg"
                            alt="Community Engagement"
                            width={600}
                            height={400}
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="md:ml-6 p-4 text-center md:text-left">
                            <h2 className="text-2xl uppercase font-semibold text-amber-200 mb-4">Community Engagement</h2>
                            <p className="text-lg text-amber-200">
                                Proudly supporting local initiatives and events.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="mb-12 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 text-center">
                        <h2 className="text-2xl uppercase font-semibold text-amber-200 mb-4">What Our Customers Say</h2>
                        <div className="space-y-4">
                            <p className="text-lg text-amber-200 italic bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-4 rounded-lg">
                                Best pizza in town! The flavors are incredible, and the service is always top-notch. - Sarah M.
                            </p>
                            <p className="text-lg text-amber-200 italic bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-4 rounded-lg">
                                Jays Pizza never disappoints. The burgers are amazing, and the atmosphere is cozy. - John D.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="mb-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="relative">
                        <div id="map" className="w-full h-96 rounded-lg"></div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
