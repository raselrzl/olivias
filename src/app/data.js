"use client";
import { useEffect, useState } from 'react';
import { BASE_API_URL } from "@/lib/utils";
import PopularBurgers from './components/popularBurgers';
import PopularPizzas from './components/popularPizzas';
import Burgers from './components/burgers';
import Pizzas from './components/pizzas';
import Drinks from './components/drinks';
import Extras from './components/extras';
import Deserts from './components/deserts';
import HomePizza from './components/HomePizza';

export default function Data() {
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
      <PopularBurgers data={data=[]}/>
      <PopularPizzas data={data=[]}/>
      <Burgers data={data=[]}/>
      <Pizzas data={data=[]}/>
      <Drinks data={data=[]}/>
      <Extras data={data=[]}/>
      <Deserts data={data=[]}/>
      <HomePizza data={data=[]}/>
    </>
  );
}
