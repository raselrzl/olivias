"use client";
import { BASE_API_URL } from '@/lib/utils';
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

  // Fetch data on component mount and set up interval
  useEffect(() => {
    fetchLatestNotification(); // Fetch data on component mount

    const intervalId = setInterval(() => {
      fetchLatestNotification(); // Fetch data every 1 minute
    }, 2 * 60 * 1000); // 1 minute in milliseconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (error) {
    return <div className='text-red-500 text-center'>Error: {error}</div>;
  }

  return (
    <div>     
      <div>
        <span className="text-xxs">{latestNotification || 'JAYS'}</span>
      </div>
    </div>
  );
}
