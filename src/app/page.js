"use client";
import Header from "./components/Header";
import HomePizza from "./components/HomePizza";
import { Footer } from "./components/Footer";
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log data to the console
        setData(data);
      });
  }, []);

  // Filter the data to show only items in the "Deserts" category
  const desertsData = data.find(category => category.category === 'Deserts');

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <HomePizza />
      <Footer />
    </div>
  );
}
