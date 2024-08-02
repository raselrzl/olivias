"use client";

import { useState } from 'react';

export default function NotificationForm() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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
    </div>
  );
}
