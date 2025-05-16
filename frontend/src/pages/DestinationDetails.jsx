import React from "react";
import { useParams } from "react-router-dom";
import destinations from "../data/destination";



function DestinationDetails() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === parseInt(id));

  if (!destination) return <p>Destination not found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">{destination.name}</h2>
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-[500px] object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700 mb-2">{destination.description}</p>
      <p className="text-gray-600">{destination.details}</p>
    </div>
  );
}

export default DestinationDetails;
