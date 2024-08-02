"use client";
import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';

export default function Notification() {
  const [latestNotification, setLatestNotification] = useState(null);

  const fetchLatestNotification = async () => {
    try {
      const response = await fetch('/api/notification/latest');
      const data = await response.json();
      if (response.ok) {
        setLatestNotification(data.message);
        // Optionally, update 'viewed' status here
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error fetching latest notification:', error);
    }
  };

  useEffect(() => {
    fetchLatestNotification(); // Fetch data on component mount

    const intervalId = setInterval(() => {
      fetchLatestNotification(); // Fetch data every 20 minutes
    }, 3 * 60 * 1000); // 3 minutes in milliseconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <>       
      <div className="text-amber-100 whitespace-nowrap animate-marquee">
        {latestNotification ? (
          <span className="text-xxs">{latestNotification}</span>
        ) : (
          <span className="text-xxs"> <LoadingSpinner /></span>
        )}
      </div>
    </>
  );
}
