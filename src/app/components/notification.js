"use client";
import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';
import { BASE_API_URL } from '@/lib/utils';

export default function Notification() {
  const [latestNotification, setLatestNotification] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Initial loading state should be true

  const fetchLatestNotification = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/api/notification/latest`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLatestNotification(data.message);
    } catch (error) {
      console.error('Error fetching latest notification:', error);
      setError('Error fetching latest notification: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestNotification(); // Fetch data on component mount

    const intervalId = setInterval(() => {
      fetchLatestNotification(); // Fetch data every 2 minutes
    }, 2 * 60 * 1000); // 2 minutes in milliseconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  if (loading) {
    return <div><LoadingSpinner /></div>;
  }

  if (error) {
    return <div className='text-red-500 text-center'>Error: {error}</div>;
  }

  return (
    <div className="text-amber-100 whitespace-nowrap animate-marquee">
      {latestNotification ? (
        <span className="text-xxs">{latestNotification}</span>
      ) : (
        <span className="text-xxs">No notifications available</span>
      )}
    </div>
  );
}
