"use client";
import AddPropertyModal from "@/components/AddPropertyModal";
import { usePropertyContext } from "@/contexts/PropertyContext";
import { NextPage } from "next";
import Image from "next/image";

interface Props {
  id: number;
}

const Page: NextPage<Props> = ({}) => {
  // const { properties } = usePropertyContext();
  const properties = [
    {
      id: 1,
      imageUrl: "/properties/image1.jpg",
      price: "$350,000",
      title: "Modern Family Home",
      features: ["4 Beds", "3 Baths", "2,500 sq ft"],
      location: "Ahmedabad",
    },
    {
      id: 2,
      imageUrl: "/properties/image2.jpg",
      price: "$450,000",
      title: "Luxury Villa with Pool",
      features: ["5 Beds", "4 Baths", "3,000 sq ft"],
    },
    {
      id: 3,
      imageUrl: "/properties/image3.jpg",
      price: "$275,000",
      title: "Cozy Urban Apartment",
      features: ["2 Beds", "1 Bath", "1,200 sq ft"],
    },
    {
      id: 4,
      imageUrl: "/properties/image4.jpg",
      price: "$275,000",
      title: "Cozy Urban Apartment",
      features: ["2 Beds", "1 Bath", "1,200 sq ft"],
    },
    {
      id: 5,
      imageUrl: "/properties/image5.jpg",
      price: "$275,000",
      title: "Cozy Urban Apartment",
      features: ["2 Beds", "1 Bath", "1,200 sq ft"],
    },
    {
      id: 6,
      imageUrl: "/properties/image6.jpg",
      price: "$275,000",
      title: "Cozy Urban Apartment",
      features: ["2 Beds", "1 Bath", "1,200 sq ft"],
    },
    // Add more properties as needed
  ];

  return (
    <>
      <section className="py-2 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property: any) => (
              <div
                key={property.id}
                className="bg-black rounded-lg shadow-md overflow-hidden text-white border"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={property.imageUrl}
                    alt={property.title}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {property.title}
                  </h3>
                  <p className="text-lg font-bold text-blue-600 mt-2">
                    {property.price}
                  </p>
                  {/*<ul className="text-white mt-3 space-y-1">
                    {property.features.map((feature: any, index: any) => (
                      <li key={index} className="flex items-center">
                        <span className="inline-block w-2 h-2 mr-2 bg-white rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul> */}
                  <div className="flex justify-between mt-6">
                    <button className="text-white border border-white rounded-lg px-3 py-1 hover:bg-primary-800 hover:text-white transition">
                      View Details
                    </button>
                    <button className="text-white border border-white rounded-lg px-3 py-1 hover:bg-primary-800 hover:text-white transition">
                      Contact Seller
                    </button>
                    <button className="text-white border border-white rounded-lg px-3 py-1 hover:bg-primary-800 hover:text-white transition">
                      Schedule Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AddPropertyModal></AddPropertyModal>
    </>
  );
};

export default Page;
