"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import AddPropertyModal from "@/components/AddPropertyModal";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFilterContext } from "@/contexts/FilterContext";

interface Property {
  id: number;
  imageUrl: string;
  price: string;
  title: string;
  features: string[];
  location: string;
  propertyType?: string;
  sellerName: string;
  sellerContact: string;
  liked?: boolean;
  views: number;
  inquiries: number;
}

const Page = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const { filterType, searchValue } = useFilterContext();

  const filteredProperties = useMemo(() => {
    const lowerCaseSearch = searchValue.toLowerCase();

    return properties.filter((property) => {
      if (!searchValue) return !property.liked;

      switch (filterType) {
        case "location":
          return property.location.toLowerCase().includes(lowerCaseSearch);
        case "pricelt":
        case "priceht":
          const price = parseFloat(property.price);
          const searchPrice = parseFloat(lowerCaseSearch);
          return !isNaN(price) && !isNaN(searchPrice)
            ? filterType === "pricelt"
              ? price <= searchPrice
              : price >= searchPrice
            : false;
        case "propertyType":
          return property.propertyType?.toLowerCase().includes(lowerCaseSearch);
        default:
          return false;
      }
    });
  }, [properties, filterType, searchValue]);

  useEffect(() => {
    const storedProperties = JSON.parse(localStorage.getItem("properties") || "[]");
    if (storedProperties.length === 0) {
      const defaultProperties: Property[] = [
        {
          id: 1,
          imageUrl: "/properties/image1.jpg",
          price: "1000000",
          title: "Spacious Apartment",
          features: ["2 Bedrooms", "1 Bathroom", "City View"],
          location: "City Center",
          propertyType: "Apartment",
          sellerName: "John Doe",
          sellerContact: "1234567890",
          liked: false,
          views: 0,
          inquiries: 0,
        },
        {
          id: 2,
          imageUrl: "/properties/image2.jpg",
          price: "750000",
          title: "Cozy Cottage",
          features: ["3 Bedrooms", "2 Bathrooms", "Mountain View"],
          location: "Countryside",
          propertyType: "Cottage",
          sellerName: "Jane Smith",
          sellerContact: "0987654321",
          liked: false,
          views: 0,
          inquiries: 0,
        },
      ];
      localStorage.setItem("properties", JSON.stringify(defaultProperties));
      setProperties(defaultProperties);
    } else {
      setProperties(storedProperties);
    }
  }, []);

  const updateLocalStorage = (updatedProperties: Property[]) => {
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
    setProperties(updatedProperties);
  };

  const toggleLike = (propertyId: number) => {
    const updatedProperties = properties.map((property) =>
      property.id === propertyId ? { ...property, liked: !property.liked } : property
    );
    updateLocalStorage(updatedProperties);
  };

  const deleteProperty = (propertyId: number) => {
    const updatedProperties = properties.filter((property) => property.id !== propertyId);
    updateLocalStorage(updatedProperties);
  };

  const incrementInquiries = (propertyId: number) => {
    const updatedProperties = properties.map((property) =>
      property.id === propertyId ? { ...property, inquiries: property.inquiries + 1 } : property
    );
    updateLocalStorage(updatedProperties);
  };

  const PropertyCard = ({ property }: { property: Property }) => (
    <div className="bg-black rounded-lg shadow-md overflow-hidden text-white border">
      <div className="relative h-48 w-full">
        <Image
          src={`/properties/image${(property.id % 6) + 1}.jpg`}
          alt={property.title}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{property.title}</h3>
        <p className="text-lg font-bold text-blue-600 mt-2">₹{parseFloat(property.price).toFixed(2)}</p>
        <div className="flex justify-between mt-2">
          <p><span className="font-semibold">Views:</span> {property.views}</p>
          <p><span className="font-semibold">Inquiries:</span> {property.inquiries}</p>
        </div>
        <div className="flex justify-between items-center mt-3">
          <button
            onClick={() => setSelectedProperty(property)}
            className="text-white border border-white rounded-lg px-3 py-1 hover:bg-primary-800"
          >
            More Details
          </button>
          <div className="flex items-center">
            <FavoriteIcon
              className={`cursor-pointer ${property.liked ? "text-red-600" : "text-gray-400"}`}
              onClick={() => toggleLike(property.id)}
            />
            <DeleteIcon
              onClick={() => deleteProperty(property.id)}
              className="text-red-600 cursor-pointer ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="py-2 bg-black">
        <div className="container mx-auto px-4">
          {properties.length === 0 ? (
            <h1 className="text-2xl font-bold text-white text-center py-10">
              No Properties Available
            </h1>
          ) : (
            <>
              {properties.some((property) => property.liked) && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Liked Properties</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {properties.filter((property) => property.liked).map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                </div>
              )}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">All Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {selectedProperty && (
        <Modal isOpen={true} onClose={() => setSelectedProperty(null)}>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{selectedProperty.title}</h2>
            <p className="text-lg font-bold text-blue-600 mb-2">₹{selectedProperty.price}</p>
            <p className="mb-1">Location: {selectedProperty.location}</p>
            <p className="mb-1">Type: {selectedProperty.propertyType}</p>
            <ul className="mb-2">
              {selectedProperty.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-gray-700 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="font-semibold mt-4">Seller Details:</p>
            <div className="flex justify-between">
              <p>Name: {selectedProperty.sellerName}</p>
              <button
                className="bg-blue-500 text-white px-1 py-1 rounded"
                onClick={() => {
                  incrementInquiries(selectedProperty.id);
                  setSelectedProperty(null);
                }}
              >
                Inquire
              </button>
            </div>
          </div>
        </Modal>
      )}

      <div className="fixed bottom-5 right-5">
        <AddPropertyModal />
      </div>
    </>
  );
};

export default Page;
