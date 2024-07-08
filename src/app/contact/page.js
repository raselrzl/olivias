"use client";
import { useState } from 'react';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import FormInputs from '../components/FormInputs';
import { Footer } from '../components/Footer';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [showConfirmation, setShowConfirmation] = useState(false);

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
            // Log form data to the console
            console.log('Form Data Submitted:', formData);

            // Show confirmation message
            setShowConfirmation(true);
            setTimeout(() => {
                setShowConfirmation(false);
            }, 3000);

            // Clear the form data
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
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
                            <h1 className="text-3xl font-bold text-amber-200 mb-4 uppercase">Contact Us</h1>
                            <p className="text-lg text-amber-200 lg:px-40">
                                Whether you have questions, feedback, or just want to say hello, we’re here for you. Fill out the form below, and we’ll get back to you as soon as possible.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12 mx-4 lg:mx-40 xl:mx-40 rounded-lg shadow-lg overflow-hidden p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <FormInputs formData={formData} handleChange={handleChange} errors={errors} />
                        <div>
                            <button
                                type="submit"
                                className={`w-full py-2 px-4 ${showConfirmation ? 'bg-black' : 'bg-primary'} text-white rounded-md shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                    {showConfirmation && (
                        <div className="text-center text-green-500 mt-4">
                            Your message has been sent successfully!
                        </div>
                    )}
                </section>
            </div>
            <Footer />
        </div>
    );
}
