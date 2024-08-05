"use client";
import { useState, useEffect } from 'react';

export default function Notification() {
  const [latestNotification, setLatestNotification] = useState(null);
  const [error, setError] = useState(null);

  const fetchLatestNotification = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/api/notification/latest`);
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

  useEffect(() => {
    fetchLatestNotification(); // Fetch data on component mount

    const intervalId = setInterval(() => {
      fetchLatestNotification(); // Fetch data every 2 minutes
    }, 1 * 60 * 1000); // 2 minutes in milliseconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  if (error) {
    return <div className='text-red-500 text-center'>Error: {error}</div>;
  }

  return (
    <div className="text-amber-100 whitespace-nowrap animate-marquee"> 
        <span className="text-xxs">{latestNotification}</span>
    </div>
  );
}
