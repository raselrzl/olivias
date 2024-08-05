"use client";
import { useState, useEffect } from 'react';

export default function NotificationForm() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [latestNotification, setLatestNotification] = useState('');

  // Function to fetch the latest notification
  const fetchLatestNotification = async () => {
    try {
      const response = await fetch('/api/notification/latest');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLatestNotification(data.message || 'No notifications available');
    } catch (error) {
      console.error('Error fetching latest notification:', error);
      setError('Error fetching latest notification: ' + error.message);
    }
  };

  // Fetch latest notification on component mount
  useEffect(() => {
    fetchLatestNotification();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(result.message);
        setMessage('');
        
        // Hide the success message after 10 seconds
        setTimeout(() => {
          setSuccess(null);
        }, 10000);

        // Fetch the latest notification after successful submission
        fetchLatestNotification();
      } else {
        setError(result.error || 'An unexpected error occurred');
      }
    } catch (error) {
      setError('An unexpected error occurred: ' + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-800 text-gray-200 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Notification</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Latest Notification</h3>
        <p className="p-2 bg-gray-700 rounded">{latestNotification}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      <button
        onClick={fetchLatestNotification}
        className="w-full bg-secondary text-white p-2 rounded mt-4 hover:bg-primary"
      >
        Click to Update Notification
      </button>
    </div>
  );
}
