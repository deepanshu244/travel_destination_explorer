import React from "react";
import destinations from "../data/destination";
import { Link } from "react-router-dom";

function Destinations() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Top Travel Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {destinations.map((dest) => (
          <div key={dest.id} className="bg-white rounded-lg shadow p-4">
            <img src={dest.image} alt={dest.name} className="rounded-lg w-full h-100 object-cover" />
            <h3 className="text-2xl font-semibold mt-2">{dest.name}</h3>
            <p className="text-gray-600">{dest.description}</p>
            <Link
              to={`/destination/${dest.id}`}
              className="text-blue-600 mt-2 inline-block"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
