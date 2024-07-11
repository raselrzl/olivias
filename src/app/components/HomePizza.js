import RightArrow from './RightArrow';
import PopularPizzas from './popularPizzas';
import PopularBurgers from './popularBurgers';
import ImageSlider from './ImageSlider';
import Link from 'next/link';

export default function HomePizza() {
    return (
        <section className='lg:mx-20 lg:px-20 mb-24 px-6'>
            <div>
                <div >
                    <h1 className='text-center text-2xl font-bold text-amber-200 uppercase mb-4'>Welcome to  <span className='text-rose-500'>JAYS! </span> </h1>
                    <div className='bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-6 shadow-lg mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 max-w-screen-lg'>
                        <p className='mb-6 my-6 text-amber-100 text-sm text-center uppercase'>
                            Experience a culinary masterpiece with our signature pizza, where every element harmonizes to create pure delight. Our handcrafted dough, topped with the finest tomatoes, artisanal cheeses, and an array of fresh, flavorful toppings, delivers a symphony of taste sensations. Indulge in a slice of pure perfection today and savor the magic!
                        </p>
                    </div>
                    <ImageSlider />
                    <div className='flex items-center justify-center gap-4 text-sm m-8'>

                        <button className='place-items-center bg-primary flex uppercase gap-2 rounded text-white px-4 py-2 items-center'>
                            Our Most Popular Pizzas
                        </button>
                    </div>
                    <div className='grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 lg:pl-10 lg:pr-10'>
                        <PopularPizzas />

                    </div>

                    <h1 className='text-center mt-2 text-2xl font-semibold text-amber-200'>Slice & Sizzle: Where Every Bite from <span className='text-rose-500'>Pizza</span> Tells a Tale of Taste! </h1>
                    <div className='flex items-center justify-center gap-4 text-sm mt-10'>

                        <Link href="/menu" className='bg-primary flex uppercase gap-2 rounded text-white px-4 py-2 items-center'>
                            Check Our Menu<RightArrow />
                        </Link>
                    </div>

                </div>

            </div>


            <div>
                <h1 className='text-center mt-12  text-2xl font-semibold text-amber-200'>SmashBite: Bite into <span className='text-rose-500'> Burger </span> Bliss with Every Smash!</h1>
                <p className='text-center mb-6 my-6 text-amber-100 text-sm'></p>

                <div className='bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-6  shadow-lg mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 max-w-screen-lg'>
                    <p className='mb-6 my-6 text-amber-100 text-sm text-center uppercase'>
                        Experience burger bliss like never before with our smash burgers. Every bite bursts with juicy perfection, the result of our meticulous smashing technique. Topped with fresh ingredients and nestled between toasted buns, each burger promises a mouthwatering journey through layers of flavor and satisfaction.</p>
                </div>

                <div className='flex items-center justify-center gap-4 text-sm mt-10 mb-10'>
                    <button className='bg-primary flex uppercase gap-2 rounded text-white px-4 py-2 items-center'>
                        Most Sailed Burgers
                    </button>
                </div>
            </div>

            <div className='grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 lg:pl-10 lg:pr-10'>

                <PopularBurgers />

            </div>

            <div className='flex items-center justify-center gap-4 text-sm mt-10'>
                <Link href="/menu" className='bg-primary flex uppercase gap-2 rounded text-white px-4 py-2 items-center'>
                    Why don't you check our burger Menu<RightArrow />
                </Link>
            </div>
            <div>
                <h1 className='text-center mt-12  text-2xl font-semibold text-amber-200'>
                    "Triple Delight: Extra Fries, Sauces, and Drinks – Elevating Your Dining Experience!"</h1>
                <div className='flex items-center justify-center gap-4 text-sm mt-10'>
                    <Link href="/menu" className='bg-primary flex uppercase gap-2 rounded text-white px-4 py-2 items-center'>
                        I know you you fat cow, you need extra<RightArrow />
                    </Link>
                </div>
            </div>






            <div className="relative bg-cover bg-center bg-no-repeat min-h-[25vh] h-[25vh] bg-[url('/images/milkshake2.jpg')]">
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content container */}
                <div className="relative flex flex-col items-center justify-center h-full text-center text-white p-6">
                    {/* Title */}
                    <h1 className='text-center mt-12 text-2xl font-semibold text-amber-200'>"Indulge & Delight: Explore Our Scrumptious Dessert Haven!"</h1>

                    {/* Button */}
                    <Link href="/menu" className='bg-primary flex uppercase gap-2 rounded text-white px-4 py-2 items-center'>
                        Explore <RightArrow />
                    </Link>
                </div>
            </div>






        </section>
    );
}