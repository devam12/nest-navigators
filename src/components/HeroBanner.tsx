import { NextPage } from "next";
import Image from "next/image";
// import Image from "next/image";

const HeroBanner: NextPage = ({}) => {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-[url('/path-to-your-image.jpg')] ">
      <div className="bg-black/50 grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 text-white ">
          <h1 className="font-bold max-w-2xl mb-6 text-4xl leading-none md:text-5xl xl:text-6xl">
            Discover Your Dream Home in Srikakulam
          </h1>
          <p className="max-w-2xl mb-10 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">
            Explore our curated selection of premium properties to find the
            perfect home for you and your family in Srikakulam.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Find Your Dream Home
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
