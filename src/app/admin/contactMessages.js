import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/loading-spinner';

export default function ContactMessages() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch('/api/contactMessages');
                const data = await response.json();
                // Sort messages by time in descending order
                data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setMessages(data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    if (loading) return <LoadingSpinner />; // Show spinner while loading

    return (
        <div className='my-10 mb-40 px-8'>
            <div className='flex justify-center mb-10'>
                <h1 className='text-2xl font-semibold text-amber-200'>Contact Messages</h1>
            </div>
            <div>
                {messages.length > 0 ? (
                    messages.map((msg) => (
                        <div key={msg._id} className='bg-white shadow-lg rounded-lg p-4 mb-6 mx-auto max-w-md'>
                            <div className='border-b border-gray-200 pb-2 mb-4'>
                                <h2 className='text-lg font-semibold text-gray-800'>{msg.name}</h2>
                                <p className='text-sm text-gray-600'>{msg.email}</p>
                                <p className='text-md font-medium text-gray-800 mt-2'>{msg.subject}</p>
                            </div>
                            <div className='bg-gray-100 p-4 rounded-lg'>
                                <p className='text-gray-700'>{msg.message}</p>
                            </div>
                            <div className='flex justify-end mt-4'>
                                <span className='text-xs text-gray-500'>{new Date(msg.createdAt).toLocaleString()}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No messages found.</p>
                )}
            </div>
        </div>
    );
}
