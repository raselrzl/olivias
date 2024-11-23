"use client";
import { Footer } from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

export default function AboutPage() {
  /*  useEffect(() => {
        const initializeMap = () => {
            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 58.6417, lng: 15.6930 }, // Correct coordinates for Finspångsvägen 484, Norrköping, Sweden
                zoom: 15,
            });

            new google.maps.Marker({
                position: { lat: 58.6417, lng: 15.6930 }, // Correct coordinates for Finspångsvägen 484, Norrköping, Sweden
                map,
                title: "Visit Us at Jay's Pizza",
            });
        };

        if (window.google) {
            initializeMap();
        } else {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCPTiLxOo0c9w-KafsLYvdMuV5h0UphSro&callback=initializeMap`;
            script.async = true;
            script.defer = true;
            window.initializeMap = initializeMap;
            document.head.appendChild(script);
        }
    }, []); */

  return (
    <div>
      <div className="mx-auto mb-4 max-w-7xl p-4 text-[#EAC6B5] sm:p-6 lg:p-8">
        {/* Introduction Section */}
        <section className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl">
          <div className="">
            {/*  <Image
                            src="/images/restaurant-interior.jpg"
                            alt="Restaurant Interior"
                            width={1200}
                            height={400}
                            className="w-full h-60 object-cover"
                        /> */}
            <div className="">
              <h1 className="mb-4 text-3xl font-bold uppercase text-black">
                Welcome to OLIVIA&apos;S
              </h1>
              <p className="text-md text-center text-black lg:px-40">
                Välkommen till Olivia Bar – Norrköpings pulserande mötesplats
                där trender föds och vänner möts! Här bjuder vi på en atmosfär
                fylld av energi, god mat och unika cocktails som garanterat
                förhöjer din kväll. Kom in, koppla av och låt våra skickliga
                bartenders skapa drinkar som är lika kreativa som de är
                smakrika. Hos oss är varje dag/kväll speciell, och med
                öppettider till sent flera dagar i veckan har du alltid en plats
                att njuta, och möta nya ansikten. Vår uteservering blir en
                självklar favorit under de varmare månaderna, där du kan njuta
                av en drink i sällskap av stadens liv och rörelse. Olivia Bar är
                mer än bara en bar – det är en plats där du skapar minnen.
                Oavsett om du är ute efter en kväll med vänner, att fira något
                speciellt eller bara vill uppleva Norrköpings krog-liv när det
                är som bäst, är vi redo att välkomna dig! OLIVIA BAR Mat &
                Cocktails{" "}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl">
          <div className="flex flex-col items-center p-6 md:flex-row">
            <Image
              src="/images/ourchef.avif"
              alt="Our Chef"
              width={600}
              height={400}
              className="h-64 w-full object-cover shadow-lg md:w-1/2"
            />
            <div className="p-4 text-center md:ml-6 md:text-left">
              <h2 className="mb-4 text-2xl font-semibold uppercase text-black">
                Our Story
              </h2>
              <p className="text-lg text-black">
                Founded in 2024, OLIVIAS is a beloved spot for classic Special
                food and drinks.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl">
          <div className="flex flex-col items-center p-6 md:flex-row">
            <Image
              src="/images/ourteam.jpg"
              alt="Our Team"
              width={600}
              height={400}
              className="h-64 w-full object-cover shadow-lg md:w-1/2"
            />
            <div className="p-4 text-center md:ml-6 md:text-left">
              <h2 className="mb-4 text-2xl font-semibold uppercase text-black">
                Meet Our Team
              </h2>
              <p className="text-lg text-black">
                Led by Chef of OLIVIAS, our team serves up the best food
                compared to any classic restaurant.
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl">
          <div className="flex flex-col items-center p-6">
            <div className="flex w-full flex-col items-center md:flex-row">
              <div className="p-4 text-center md:ml-6 md:text-left">
                <h2 className="mb-4 text-2xl font-semibold uppercase text-black">
                  Our Philosophy
                </h2>
                <p className="text-lg text-black">
                  We’re dedicated to perfecting the food, Our commitment to
                  quality ingredients and traditional methods ensures every dish
                  is exceptional.
                </p>
              </div>
            </div>
            <div className="mt-6 flex h-[50vh] w-full items-center justify-center">
              <div className="hexagon-gallery">
                <div className="hexagon">
                  <Image
                    src="/images/freshingredients.avif"
                    alt="Fresh Ingredients"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
                <div className="hexagon">
                  <Image
                    src="/olivia/o2.jpg"
                    alt="Burger Ingredients"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
                <div className="hexagon">
                  <Image
                    src="/olivia/o1.jpg"
                    alt="Ryggbif"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
                <div className="hexagon">
                  <Image
                    src="/olivia/des1.jpg"
                    alt="Smashed Steak"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
                <div className="hexagon">
                  <Image
                    src="/olivia/o2.jpg"
                    alt="Nutella"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
                <div className="hexagon">
                  <Image
                    src="/olivia/o3.jpg"
                    alt="Pizza"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
                <div className="hexagon">
                  <Image
                    src="/olivia/o4.jpg"
                    alt="Burger"
                    width={200}
                    height={200}
                    className="hexagon-inset"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Engagement Section */}
        <section className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl">
          <div className="flex flex-col items-center p-6 md:flex-row">
            <Image
              src="/images/community-engagement-event.jpg"
              alt="Community Engagement"
              width={600}
              height={400}
              className="h-64 w-full object-cover shadow-lg md:w-1/2"
            />
            <div className="p-4 text-center md:ml-6 md:text-left">
              <h2 className="mb-4 text-2xl font-semibold uppercase">
                Community Engagement
              </h2>
              <p className="text-lg">
                Proudly supporting local initiatives and events.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="">
  <div className="py-6 text-center">
    <h2 className="mb-4 text-2xl font-semibold uppercase text-black">
      What Our Customers Say
    </h2>
    <div className="space-y-4">
      <div className="relative mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl">
        <p>
          &apos;&apos;Best Burgers in town! The flavors are incredible, and the
          service is always top-notch.&apos;&apos;
        </p>
        <span className="absolute bottom-2 right-4 text-xs italic">
          - Sarah M
        </span>
      </div>
      <div className="relative mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl">
        <p>
          &apos;&apos;Steak never disappoints. The burgers are amazing, and the
          atmosphere is cozy.&apos;&apos;
        </p>
        <span className="absolute bottom-2 right-4 text-xs italic">
          - John D
        </span>
      </div>
    </div>
  </div>
</section>


        {/* Map Section */}
        {/*  <section className="mb-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="relative">
                        <div id="map" className="w-full h-48"></div>
                    </div>
                </section> */}
      </div>
      <section className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl">
        {/* Opening Hours Section */}
        <div className="p-4 text-center">
          <h2 className="mb-4 text-xl font-semibold uppercase text-black">
            Opening Hours
          </h2>
          <p className="text-xs text-black">
            Monday - Thursday: 3:00 PM - 10:00 PM
          </p>
          <p className="text-xs text-black">
            Friday & Saturday: 3:00 PM - 01:00 AM
          </p>
          <p className="text-xs text-black">Sunday: 5:00 PM - 01:00 AM</p>
        </div>

        {/* Work With Us Section */}
        <div className="mt-6 p-4 text-center">
          <h2 className="mb-4 text-xl font-semibold uppercase text-black">
            Work With Us
          </h2>
          <p className="mb-4 text-xs text-black">
            To work with us, send your CV to our email and follow us on our
            Instagram.
          </p>
          <div className="flex justify-center gap-4 text-3xl">
            
              <Link
                href="https://www.instagram.com/oliviasbarnkpg?igsh=MWtkNDBoNDU3eGxoeg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className="hover:text-[#444444]" />
              </Link>          
           
              <Link href="mailto:info@oliviasbar.se" >
                <MdMarkEmailUnread className="hover:text-[#444444]" />
              </Link>
           
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
