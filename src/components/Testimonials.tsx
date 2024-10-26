// components/Testimonials.tsx

import React from "react";

// Define the type for a testimonial
interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  designation: string;
  image: string; // Add image property if you want to include images
}

// Sample data for testimonials
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    feedback: "This product has changed my life for the better!",
    designation: "CEO, Company A",
    image: "/images/john.jpg", // Example image path
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Excellent service and great support!",
    designation: "Manager, Company B",
    image: "/images/jane.jpg", // Example image path
  },
  {
    id: 3,
    name: "Mike Johnson",
    feedback: "Highly recommend this to everyone!",
    designation: "Developer, Company C",
    image: "/images/mike.jpg", // Example image path
  },
  {
    id: 4,
    name: "Alice Brown",
    feedback: "Fantastic experience with the team!",
    designation: "Designer, Company D",
    image: "/images/alice.jpg", // Example image path
  },
  {
    id: 5,
    name: "Chris Green",
    feedback: "A game changer for my business!",
    designation: "Entrepreneur, Company E",
    image: "/images/chris.jpg", // Example image path
  },
  {
    id: 6,
    name: "Emma Wilson",
    feedback: "Support was top-notch!",
    designation: "Product Manager, Company F",
    image: "/images/emma.jpg", // Example image path
  },
  {
    id: 7,
    name: "Tom White",
    feedback: "I can't imagine working without it!",
    designation: "CTO, Company G",
    image: "/images/tom.jpg", // Example image path
  },
  {
    id: 8,
    name: "Sophia Taylor",
    feedback: "Excellent value for the price!",
    designation: "Marketing Head, Company H",
    image: "/images/sophia.jpg", // Example image path
  },
];

// Testimonials component
const Testimonials: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto  bg-black rounded-lg shadow-md p-6 border border-gray-600">
      <h2 className="text-2xl font-bold text-center text-white mb-6">
        What Our Clients Say
      </h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-80 p-4 bg-white border rounded-lg shadow-lg"
          >
            {testimonial.image && (
              <img
                src={`https://avatar.iran.liara.run/public/${index}`}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
            )}
            <p className="text-gray-500 italic">"{testimonial.feedback}"</p>
            <h4 className="text-lg text-gray-800 mt-2">{testimonial.name}</h4>
            <p className="text-gray-500">{testimonial.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
