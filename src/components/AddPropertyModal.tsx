// components/AddPropertyModal.tsx
"use client";
import React, { useState } from "react";
import { usePropertyContext } from "@/contexts/PropertyContext";
import { Box, Modal } from "@mui/material";

const AddPropertyModal: React.FC<any> = ({}) => {
  const { addProperty, isModalOpen, setModalOpen } = usePropertyContext();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [features, setFeatures] = useState("");

  const onClose = () => {
    setModalOpen(false);
  };

  const handleAddProperty = () => {
    addProperty({
      title,
      location,
      price,
      propertyType,
      features: features.split(",").map((feature) => feature.trim()),
    });
    onClose();
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">List Your Property</h3>
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
        <button
          onClick={handleAddProperty}
          className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
        >
          Add Property
        </button>
        <button onClick={onClose} className="text-gray-600 mt-2 underline">
          Close
        </button>
      </div>
    </div>
  );
};

export default AddPropertyModal;
