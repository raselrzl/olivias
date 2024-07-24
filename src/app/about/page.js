"use client"
import { Footer } from "../components/Footer";
import Header from "../components/Header";
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
            <div className="max-w-7xl mx-auto p-4 mb-4 sm:p-6 lg:p-8 text-amber-200">
                {/* Introduction Section */}
                <section className="text-center mb-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="relative">
                        <img
                            src="images/restaurant-interior.jpg"
                            alt="Restaurant Interior"
                            className="w-full h-60 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/50 rounded-t-lg">
                            <h1 className="text-3xl font-bold text-amber-200 mb-4  uppercase">Welcome to JAY'S</h1>
                            <p className="text-lg text-amber-200">
                            Discover JAY’S, your go-to spot for classic pizzas, unique specials, and irresistible smash burgers right here in Svärtinge. We pride ourselves on crafting delicious dishes with passion..
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="mb-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-6">
                        <img
                            src="images/ourchef.avif"
                            alt="Our Chef"
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="md:ml-6 p-4 text-center md:text-left">
                            <h2 className="text-2xl uppercase font-semibold text-amber-200 mb-4">Our Story</h2>
                            <p className="text-lg text-amber-200">
                                Founded in 2024, JAY'S is a beloved spot for classic Special Pizza and Smash Burger.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="mb-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-6">
                        <img
                            src="images/ourteam.jpg"
                            alt="Our Team"
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="md:ml-6 p-4 text-center md:text-left">
                            <h2 className="text-2xl uppercase font-semibold text-amber-200 mb-4">Meet Our Team</h2>
                            <p className="text-lg text-amber-200">
                                Led by Chef of JAY'S, our team serves up the best Pizza and Burger compare to any classic restuarent.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Philosophy Section */}
                <section className="mb-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-6">
                        <img
                            src="images/freshingredients.avif"
                            alt="Fresh Ingredients"
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="md:ml-6 text-center p-4 md:text-left">
                            <h2 className="text-2xl uppercase font-semibold text-amber-200 mb-4">Our Philosophy</h2>
                            <p className="text-lg text-amber-200">
                            We’re dedicated to perfecting the art of pizza and smash burgers.
                            Our commitment to quality ingredients and traditional methods ensures every dish is exceptional. </p>
                        </div>
                    </div>
                </section>

                {/* Community Engagement Section */}
                <section className="mb-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-6">
                        <img
                            src="images/community-engagement-event.jpg"
                            alt="Community Engagement"
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
                                "Best pizza in town! The flavors are incredible, and the service is always top-notch." - Sarah M.
                            </p>
                            <p className="text-lg text-amber-200 italic bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-4 rounded-lg">
                                "A hidden gem! The ambiance is perfect for a date night, and the staff makes you feel like family." - Michael R.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Visit Us Section */}
                <section className="text-center mb-14 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                    <h2 className="text-2xl uppercase font-semibold text-amber-200 mb-4">Visit Us</h2>
                    <p className="text-lg text-amber-200 mb-6">
                        Join us at <span className="font-semibold">JAY'S</span>, located at <span className="font-semibold">Finspångsvägen 484, 605 80 Svärtinge, Sweden</span>.
                    </p>
                    <div className="relative mb-6">
                        <div id="map" className="w-full h-64 rounded-lg shadow-lg"></div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-700 p-4  via-gray-800 to-gray-900 rounded-lg text-amber-200">
                        <h3 className="text-lg uppercase font-semibold text-amber-200 ">Opening Hours</h3>
                        <ul className="text-sm space-y-1">
                            <li>Wednesday: 3–8:30 PM</li>
                          
                            <li>Friday: 11 AM–1:30 PM, 3–9:30 PM</li>
                            <li>Saturday: 12–9:30 PM</li>
                            <li>Sunday: 12–8 PM</li>
                            <li>Monday & Tuesday & Thursday: Closed</li>
                            
                        </ul>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
