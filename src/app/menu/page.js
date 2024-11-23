"use client";
import { useState, lazy, Suspense } from "react";
import { Footer } from "../components/Footer";
import LoadingSpinner from "../components/loading-spinner";

const Burgers = lazy(() => import("../components/varm"));
const Deserts = lazy(() => import("../components/deserts"));
const Extras = lazy(() => import("../components/sallad"));
const Pizzas = lazy(() => import("../components/for"));
const Drinks = lazy(() => import("../components/barn"));

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="pb-24">
        <div className="m-2 flex flex-col items-center justify-center text-sm sm:flex-row">
          <div className="flex flex-row">
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${selectedCategory === "All" ? "text-black" : "bg-black text-[#EAC6B5]"}`}
              onClick={() => handleCategoryChange("All")}
            >
              All
            </button>
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${selectedCategory === "Pizzas" ? "text-black" : "bg-black text-[#EAC6B5]"}`}
              onClick={() => handleCategoryChange("Pizzas")}
            >
              Förätter
            </button>
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${selectedCategory === "Burgers" ? "text-black" : "bg-black text-[#EAC6B5]"}`}
              onClick={() => handleCategoryChange("Burgers")}
            >
              Varmrätter
            </button>
          </div>
          <div className="flex flex-row">
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${selectedCategory === "Extras" ? "text-black" : "bg-black text-[#EAC6B5]"}`}
              onClick={() => handleCategoryChange("Extras")}
            >
              Sallad
            </button>

            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase  ${selectedCategory === "Deserts" ? "text-black" : "bg-black text-[#EAC6B5]"}`}
              onClick={() => handleCategoryChange("Deserts")}
            >
              Deserts
            </button>
            <button
              className={`m-2 flex place-items-center items-center gap-2 rounded px-4 py-2 uppercase ${selectedCategory === "Drinks" ? "text-black" : "bg-black text-[#EAC6B5]"}`}
              onClick={() => handleCategoryChange("Drinks")}
            >
              Barnmeny
            </button>
          </div>
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          {selectedCategory === "All" && (
            <>
              <div className="flex justify-center">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Pizzas")}
                >
                  Förätter
                </button>
              </div>
              <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
                <Pizzas />
              </div>

              <div className="flex justify-center">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Burgers")}
                >
                  Varmrätter
                </button>
              </div>

              <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
                <Burgers />
              </div>
              <div className="flex justify-center">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Extras")}
                >
                  Sallad
                </button>
              </div>

              <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
                <Extras />
              </div>

              <div className="flex justify-center" id="Desert">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Deserts")}
                >
                  Deserts
                </button>
              </div>

              <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
                <Deserts />
              </div>
              <div className="flex justify-center">
                <button
                  className="m-10 flex w-auto items-center justify-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
                  onClick={() => handleCategoryChange("Drinks")}
                >
                  Bernmeny
                </button>
              </div>

              <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
                <Drinks />
              </div>
            </>
          )}

          {selectedCategory === "Pizzas" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
              <Pizzas />
            </div>
          )}

          {selectedCategory === "Burgers" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
              <Burgers />
            </div>
          )}

          {selectedCategory === "Deserts" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
              <Deserts />
            </div>
          )}

          {selectedCategory === "Drinks" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
              <Drinks />
            </div>
          )}
          {selectedCategory === "Extras" && (
            <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
              <Extras />
            </div>
          )}
        </Suspense>

        <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl">
          <div className="">
            <h1 className="my-2 mb-2 text-center text-xl uppercase">Note:</h1>
            <p className="my-6 mb-6 text-center text-sm uppercase">
              Each Burger include 180g kött
            </p>
            <p className="my-6 mb-6 text-center text-sm uppercase">
              You have option to Choose Hallumni
            </p>
            <p className="my-6 mb-6 text-center text-sm uppercase">
              Each Steak include 220g kött
            </p>
            {/* 
                        <p className='mb-6 my-6 text-amber-100 text-sm text-center uppercase '>
                            At Jay&apos;s, we offer two types of pizza bread to cater to your preferences. Italiensk Surdeg and Gluten-Free. <br /> <br />

                            <span className='text-primary uppercase'>Italiensk Surdeg: </span>Italiensk Surdeg: This classic Italian sourdough bread is a favorite for its rich flavor and perfect crust. Please note, selecting this option will incur an additional charge of 15 kr.
                            <br /><br /> <span className='text-primary uppercase'>Gluten-Free:</span> For those with dietary restrictions, our gluten-free pizza bread is an excellent choice. Please note, selecting this option will incur an additional charge of 20 kr.
                            <br /><br />Additionally, we are pleased to offer gluten-free burger bread for our burger enthusiasts who need or prefer gluten-free options.</p>
                    */}{" "}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
