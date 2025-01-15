import React from 'react';

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center mt-32">
        <h1 className="text-5xl font-bold text-green-600">Romantic Palace</h1>
        <p className="text-xl mt-4">Your elegant getaway and event destination.</p>
      </div>
      <div className="mt-8">
        <p className="text-lg max-w-2xl mx-auto">
          Welcome to Romantic Palace, a charming house that offers a perfect blend of comfort and elegance. 
          Whether you are looking for a short stay or planning an event, our property is equipped with all the amenities 
          you need to make your experience unforgettable.
        </p>
      </div>
    </div>
  );
};

export default Homepage;