"use client";
import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';
import { BASE_API_URL } from '@/lib/utils';

export default function Notification() {
  const [latestNotification, setLatestNotification] = useState(null);

  const fetchLatestNotification = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/api/notification/latest`);
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
