"use client"
import Header from "./components/Header";
import HomePizza from "./components/HomePizza";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <HomePizza />
      <Footer />
    </div>
  );
}
