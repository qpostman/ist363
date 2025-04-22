import React from "react";

const InternetPioneers = ({ pioneers, onPioneerClick }) => {
  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Internet Pioneers Bios</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {pioneers.map((pioneer) => (
          <div
            key={pioneer.id}
            className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden w-60 cursor-pointer transition-transform hover:scale-105"
            onClick={() => onPioneerClick(pioneer.id)}
          >
            {pioneer.viewed && (
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                VIEWED
              </div>
            )}

            <img
              src={pioneer.image}
              alt={pioneer.name}
              className="w-full h-64 object-cover"
            />
            <h2 className="text-md font-semibold py-3 bg-gray-100">
              {pioneer.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternetPioneers;
