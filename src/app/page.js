"use client"
import { useEffect, useState } from 'react';
import Header from "./components/Header";
import HomePizza from "./components/HomePizza";
import { Footer } from "./components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 150); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <HomePizza />
        <Footer />
      </div>
    </>
  );
}
