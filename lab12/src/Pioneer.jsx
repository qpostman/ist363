import React from "react";

const Pioneer = ({pioneer, goBack}) => {
    return (
        <div className="p-6 text-center">
            <button
            onClick={goBack}
            className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
            ⬅ Back
        </button>
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
            <img src={pioneer.image} alt={pioneer.name} className="w-full h-64 object-cover rounded" />
            <h2 className="text-2xl font-bold mt-4">{pioneer.name}</h2>
            <p className="mt-2 text-gray-700">{pioneer.bio}</p>
        </div>
    </div>
);
};

export default Pioneer;