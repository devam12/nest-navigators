"use client";
import React, { useState, useEffect } from "react";
import { usePropertyContext } from "@/contexts/PropertyContext";

const AddPropertyModal: React.FC<any> = ({ callback }) => {
  const { addProperty, isModalOpen, setModalOpen } = usePropertyContext();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [features, setFeatures] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerContact, setSellerContact] = useState("");
  const [error, setError] = useState("");

  const onClose = () => {
    setModalOpen(false);
    resetForm();
  };

  const handleAddProperty = () => {
    setError("");

    // Basic validation
    if (
      !title ||
      !location ||
      !price ||
      !propertyType ||
      !features ||
      !sellerName ||
      !sellerContact
    ) {
      setError("All fields are required.");
      return;
    }

    // Minimum character length validation
    if (title.length < 3) {
      setError("Title must be at least 3 characters.");
      return;
    }
    if (location.length < 3) {
      setError("Location must be at least 3 characters.");
      return;
    }
    if (propertyType.length < 3) {
      setError("Property type must be at least 3 characters.");
      return;
    }
    if (features.length < 3) {
      setError("Features must be at least 3 characters.");
      return;
    }

    // Price validation
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      setError("Please enter a valid price.");
      return;
    }

    // Features validation
    const featuresArray = features.split(",").map((feature) => feature.trim());
    if (featuresArray.length === 0 || featuresArray.some((f) => f === "")) {
      setError("Features must be comma-separated.");
      return;
    }

    // Seller name validation - letters only
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(sellerName)) {
      setError("Seller name should contain only letters.");
      return;
    }

    // Contact number validation - 10-digit number
    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(sellerContact)) {
      setError("Contact details should be a 10-digit number.");
      return;
    }

    const newProperty = {
      title,
      location,
      price: numericPrice.toString(),
      propertyType,
      features: featuresArray,
      sellerName,
      sellerContact,
    };

    addProperty(newProperty);
    savePropertyToLocalStorage(newProperty);
    callback && callback();
    onClose();
  };

  const savePropertyToLocalStorage = (property: any) => {
    const propertiesFromLocalStorage = JSON.parse(
      localStorage.getItem("properties") || "[]"
    );
    const updatedProperties = [
      ...propertiesFromLocalStorage,
      { ...property, id: Date.now(), inquiries: 0, views: 0 },
    ];
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
  };

  const resetForm = () => {
    setTitle("");
    setLocation("");
    setPrice("");
    setPropertyType("");
    setFeatures("");
    setSellerName("");
    setSellerContact("");
    setError("");
  };

  useEffect(() => {
    if (isModalOpen) {
      resetForm();
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-black">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">List Your Property</h3>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-gray-300 p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-300 p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Property Type"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="w-full border border-gray-300 p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Features (comma separated)"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          className="w-full border border-gray-300 p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Seller Name"
          value={sellerName}
          onChange={(e) => setSellerName(e.target.value)}
          className="w-full border border-gray-300 p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Contact Details"
          value={sellerContact}
          onChange={(e) => setSellerContact(e.target.value)}
          className="w-full border border-gray-300 p-2 mb-3 rounded"
        />
        <div className="flex justify-between">
          <button
            onClick={handleAddProperty}
            className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
          >
            Add Property
          </button>
          <button
            onClick={onClose}
            className="py-2 px-4 bg-white mt-4 text-black border border-black rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyModal;
