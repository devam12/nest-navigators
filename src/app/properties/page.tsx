"use client";
import AddPropertyModal from "@/components/AddPropertyModal";
import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "@/components/Modal"; // Assuming you have a Modal component for displaying details
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete"; // Import the delete icon

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
}

const Page = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  useEffect(() => {
    fetchPropertiesFromLocalStorage();
  }, []);

  const fetchPropertiesFromLocalStorage = () => {
    const propertiesFromLocalStorage = JSON.parse(
      localStorage.getItem("properties") || "[]"
    );
    setProperties(propertiesFromLocalStorage);
  };

  const deleteProperty = (propertyId: number) => {
    const updatedProperties = properties.filter(
      (property) => property.id !== propertyId
    );
    setProperties(updatedProperties);
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
  };

  const openPropertyModal = (property: Property) => {
    setSelectedProperty(property);
  };

  const closePropertyModal = () => {
    setSelectedProperty(null);
  };

  return (
    <>
      <section className="py-2 bg-black ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property: Property, index: number) => (
              <div
                key={property.id}
                className="bg-black rounded-lg shadow-md overflow-hidden text-white border"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={`/properties/image${(index % 6) + 1}.jpg`}
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
                    ₹{parseFloat(property.price).toFixed(2)}
                  </p>
                  <div className="text-center flex align-baseline justify-between">
                    <button
                      onClick={() => openPropertyModal(property)}
                      className="text-white mt-3 border border-white rounded-lg px-3 py-1 hover:bg-primary-800 hover:text-white transition"
                    >
                      More Details
                    </button>
                    <div className="flex items-center">
                      <FavoriteIcon className="text-red-600 self-center" />
                      <DeleteIcon
                        onClick={() => deleteProperty(property.id)}
                        className="text-red-600 cursor-pointer ml-2 self-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Info Modal */}
      {selectedProperty && (
        <Modal isOpen={true} onClose={closePropertyModal}>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              {selectedProperty.title}
            </h2>
            <p className="text-lg font-bold text-blue-600 mb-2">
              {selectedProperty.price}
            </p>
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
            <p>Name: {selectedProperty.sellerName}</p>
            <p>Contact: {selectedProperty.sellerContact}</p>
          </div>
        </Modal>
      )}

      {/* Add Property Modal */}
      <AddPropertyModal callback={fetchPropertiesFromLocalStorage} />
    </>
  );
};

export default Page;
