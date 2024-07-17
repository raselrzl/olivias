"use client";

import { Footer } from "../components/Footer";
import Header from "../components/Header";
import Login from "./Login";
import Register from "./Register";

export default function Home() {
 

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <Login />
        <Register />
      <Footer />
    </div>
  );
}
