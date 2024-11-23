import RightArrow from "./RightArrow";
import PopularPizzas from "./popularPizzas";
import PopularBurgers from "./popularBurgers";
import ImageSlider from "./ImageSlider";
import Link from "next/link";

export default function HomePizza() {
  return (
    <section className="relative mb-24 px-6 lg:mx-20 lg:px-20">
      {/* //bg-[#EAC6B5] */}
      <div>
        <div>
          <h1 className="mb-4 text-center text-2xl font-bold uppercase text-black">
            Welcome to <span className="">Olivia&apos;S! </span>{" "}
          </h1>
          <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl">
            <p className="">
              Unna dig våra oemotståndliga hamburgare, tillagade med saftigt
              premiumkött, färska grönsaker och signatursåser för en
              smakupplevelse utöver det vanliga. Njut av perfekt grillade
              stekar, möra och kryddade för ren lyx. Få en smak av Italien med
              äkta pasta i rika såser, eller fräscha upp med färgsprakande
              sallader fyllda med krispiga grönsaker och hemlagade dressingar.
              Varje rätt är ett mästerverk för dina smaklökar!
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4 text-sm">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
            >
              Book a Table
              <RightArrow />
            </Link>
          </div>
          <ImageSlider />
          <div className="lg:m-14 mb-8 mt-8 flex items-center justify-center text-sm">
            <button className="flex place-items-center items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]">
              Our Current Popular Food
            </button>
          </div>
          <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
            <PopularPizzas />
          </div>

          <h1 className="mt-6 text-center text-2xl font-semibold text-black">
            Slice & Sizzle: Where Every Tells a Tale of Taste!
          </h1>
          <div className="mt-10 flex items-center justify-center gap-4 text-sm">
            <Link
              href="/menu"
              className="flex items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
            >
              Check Our Menu
              <RightArrow />
            </Link>
          </div>
        </div>
      </div>

      <div>
        {/* <h1 className="mt-12 text-center text-2xl font-semibold text-black">
          SmashBite: Bite into <span className="text-black"> Burger </span>{" "}
          Bliss with Every Smash!
        </h1> */}
        <p className="my-6 mb-6 text-center text-sm text-amber-100"></p>

        <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-lg">
          <p className="">
            Experience burger bliss like never before with our smash burgers.
            Every bite bursts with juicy perfection, the result of our
            meticulous smashing technique. Topped with fresh ingredients and
            nestled between toasted buns, each burger promises a mouthwatering
            journey through layers of flavor and satisfaction.
          </p>
        </div>

        <div className="mb-10 mt-10 flex items-center justify-center gap-4 text-sm">
          <button className="flex items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]">
            Most Sailed Food
          </button>
        </div>
      </div>

      <div className="mx-auto grid max-w-screen-lg grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
        <PopularBurgers />
      </div>

      <div className="mt-10 flex items-center justify-center gap-4 text-sm">
       {/*  <Link
          href="/menu"
          className="flex items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
        >
          Why dont you check our burger Menu?
          <RightArrow />
        </Link> */}
      </div>
      <div>
        <h1 className="mt-12 text-center text-2xl font-semibold text-black">
          Extra Fries, Sauces, and Drinks Elevating Your Dining Experience
        </h1>
        <div className="mt-10 flex items-center justify-center gap-4 text-sm">
          <Link
            href="/menu"
            className="mb-6 flex items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
          >
            Do you need extras?
            <RightArrow />
          </Link>
        </div>
      </div>

      <div className="relative h-[25vh] min-h-[25vh] bg-[url('/olivia/o4.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content container */}
        <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
          {/* Title */}
          <h1 className="mt-12 text-center text-2xl font-semibold text-[#EAC6B5]">
            Explore Our Scrumptious Dessert Haven
          </h1>

          {/* Button */}
          <Link
            href="/menu#Desert"
            className="flex items-center gap-2 rounded bg-black px-4 py-2 uppercase text-[#EAC6B5]"
          >
            Explore <RightArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
