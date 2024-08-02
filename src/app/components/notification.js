"use client";
import { useState, useEffect } from 'react';

export default function Notification() {
  const [latestNotification, setLatestNotification] = useState(null);

  useEffect(() => {
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

    fetchLatestNotification();
  }, []);

  return (
    <>       
        <div className="text-amber-100 whitespace-nowrap animate-marquee">
          {latestNotification ? (
            <span className="text-xxs">{latestNotification}</span>
          ) : (
            <span className="text-xxs">Loading latest notification...</span>
          )}
        </div>
    </>
  );
}
