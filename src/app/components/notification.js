"use client";
import { BASE_API_URL } from '@/lib/utils';
import { useState, useEffect } from 'react';

export default function Notification() {
  const [latestNotification, setLatestNotification] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch the latest notification
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

    // Fetch the latest notification immediately on component mount
    fetchLatestNotification();

    // Set up interval to fetch data every 1 minute
    const intervalId = setInterval(() => {
      fetchLatestNotification();
    }, 1 * 60 * 1000); // 1 minute in milliseconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only on mount and unmount

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
