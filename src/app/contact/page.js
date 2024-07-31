"use client";
import { useState } from 'react';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            try {
                // Send form data to the backend
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
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
                    console.error('Failed to submit form');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <> 
        <div className="min-h-screen">
            
            <ImageSlider />
            <div className="max-w-7xl mx-auto p-4 mb-4 sm:p-6 lg:p-8 text-amber-200">
                
                    <div className="mb-10">
                        <div className="mb-12 mx-2 lg:mx-40 xl:mx-40 shadow-lg overflow-hidden p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
                            <h1 className="text-3xl text-center font-bold text-amber-200 mb-4 uppercase">Contact Us</h1>
                            <p className="text-lg text-center text-amber-200 lg:px-40">
                                Whether you have questions, feedback, or just want to say hello, we’re here for you. Fill out the form below, and we’ll get back to you as soon as possible.
                            </p>
                        </div>
                    </div>
               

                <div className="mb-12 mx-2 lg:mx-40 xl:mx-40 shadow-lg overflow-hidden p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
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
                        <div className='bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-6 shadow-lg mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 max-w-screen-lg'>
                        <p className='mb-6 my-6 text-amber-100 text-sm text-center uppercase'>
                            Thank You for your message. We will write back as soon as possible.
                        </p>
                    </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
        </>
    );
}
