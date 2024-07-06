"use client"
import { Footer } from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ImageSlider from "../components/sliderfolder/ImageSlider";
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = "Name is required";
        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email address is invalid";
        }
        if (!formData.subject) formErrors.subject = "Subject is required";
        if (!formData.message) formErrors.message = "Message is required";
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Send the form data to the server or email service
            setSubmitted(true);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="min-h-screen">
            <Header />

            <ImageSlider />
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-amber-200">
                <section className="text-center mb-12">
                    <div className="relative bg-black/50 rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h1 className="text-4xl font-bold text-amber-200 mb-4">Contact Us</h1>
                            <p className="text-lg text-amber-200">
                                We'd love to hear from you. Please fill out the form below to get in touch.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12 mx-4 lg:mx-40 xl:mx-40 rounded-lg shadow-lg overflow-hidden p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
                    {submitted ? (
                        <div className="text-center text-amber-200">
                            <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
                            <p>Your message has been successfully sent. We will get back to you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-amber-200">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-.5 block w-full p-2 rounded-md bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-amber-200">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-.5 block w-full p-2 rounded-md bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-amber-200">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-.5 block w-full p-2 rounded-md bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-amber-200">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-.5 block w-full p-2 rounded-md bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-primary text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </section>

            </div>

            <Footer />
        </div>
    );
}
