"use client";
import HomePizza from "./components/HomePizza";
import { useEffect, useState } from 'react';
import { BASE_API_URL } from "@/lib/utils";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_API_URL}/api/data`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log data to the console
        setData(data);
      });
  }, []);

  return (
    <>
      <HomePizza />
    </>
  );
}
