import React from 'react';

const Gallery = () => {
  return (
    <div className="container mx-auto p-4 mb-32">
      <h2 className="text-3xl font-bold text-green-600 mt-32">Gallery</h2>
      <p className="mt-4">
        Explore the beauty of Romantic Palace through our gallery. Below are some images showcasing our property.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <img src='/images/1pic.png' alt="Room 1" className="w-full h-full rounded shadow" />
        <img src="/images/2pic.png" alt="Room 2" className="w-full h-full rounded shadow" />
        <img src="/images/3pic.png" alt="Living Room" className="w-full h-full rounded shadow" />
        <img src="/images/4pic.png" alt="Garden" className="w-full h-full rounded shadow" />
        <img src="/images/5pic.png" alt="Kitchen" className="w-full h-full rounded shadow" />
        <img src="/images/6pic.png" alt="Event Setup" className="w-full h-full rounded shadow" />
      </div>
    </div>
  );
};

export default Gallery;