import React from "react";

function Card({ title, image }) {
  return (
    <div className="card bg-gray-800 p-5 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110" />
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
  );
}

export default Card;
