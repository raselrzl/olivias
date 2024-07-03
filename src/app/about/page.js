"use client"
import { Footer } from "../components/layout/Footer";
import Header from "../components/layout/Header";
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
            <Header />
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-gray-300">
                {/* Introduction Section */}
                <section className="text-center mb-12 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src="restaurant-interior.jpg"
                            alt="Restaurant Interior"
                            className="w-full h-60 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/50 rounded-t-lg">
                            <h1 className="text-4xl font-bold text-white mb-4">Welcome to Jay's Pizza</h1>
                            <p className="text-lg text-gray-400">
                                Classic Italian pizza in the heart of Svärtinge, Sweden.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="mb-12 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-6">
                        <img
                            src="ourchef.avif"
                            alt="Our Chef"
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="md:ml-6 text-center md:text-left">
                            <h2 className="text-3xl font-semibold text-white mb-4">Our Story</h2>
                            <p className="text-lg text-gray-400">
                                Founded in 1975, Jay's Pizza is a beloved spot for classic Italian pizza.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="mb-12 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-6">
                        <img
                            src="ourteam.jpg"
                            alt="Our Team"
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="md:ml-6 text-center md:text-left">
                            <h2 className="text-3xl font-semibold text-white mb-4">Meet Our Team</h2>
                            <p className="text-lg text-gray-400">
                                Led by Chef Jay Spano, our team serves up the best pizza in Svärtinge.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Philosophy Section */}
                <section className="mb-12 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-6">
                        <img
                            src="freshingredients.avif"
                            alt="Fresh Ingredients"
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="md:ml-6 text-center md:text-left">
                            <h2 className="text-3xl font-semibold text-white mb-4">Our Philosophy</h2>
                            <p className="text-lg text-gray-400">
                                Fresh ingredients and classic recipes for an unforgettable dining experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Community Engagement Section */}
                <section className="mb-12 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-6">
                        <img
                            src="community-engagement-event.jpg"
                            alt="Community Engagement"
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="md:ml-6 text-center md:text-left">
                            <h2 className="text-3xl font-semibold text-white mb-4">Community Engagement</h2>
                            <p className="text-lg text-gray-400">
                                Proudly supporting local initiatives and events.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="mb-12 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-4">What Our Customers Say</h2>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-400 italic bg-gray-800 p-4 rounded-lg shadow-md">
                                "Best pizza in town! The flavors are incredible, and the service is always top-notch." - Sarah M.
                            </p>
                            <p className="text-lg text-gray-400 italic bg-gray-800 p-4 rounded-lg shadow-md">
                                "A hidden gem! The ambiance is perfect for a date night, and the staff makes you feel like family." - Michael R.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Visit Us Section */}
                <section className="text-center mb-12 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                    <h2 className="text-3xl font-semibold text-white mb-4">Visit Us</h2>
                    <p className="text-lg text-gray-400 mb-6">
                        Join us at <span className="font-semibold">Jay's Pizza</span>, located at <span className="font-semibold">Finspångsvägen 484, 605 80 Svärtinge, Sweden</span>.
                    </p>
                    <div className="relative mb-6">
                        <div id="map" className="w-full h-64 rounded-lg shadow-lg"></div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
                        <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                        <ul className="text-lg space-y-1">
                            <li>Wednesday: 3–8:30 PM</li>
                            <li>Thursday: Closed</li>
                            <li>Friday: 11 AM–1:30 PM, 3–9:30 PM</li>
                            <li>Saturday: 12–9:30 PM</li>
                            <li>Sunday: 12–8 PM</li>
                            <li>Monday: Closed</li>
                            <li>Tuesday: Closed</li>
                        </ul>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
