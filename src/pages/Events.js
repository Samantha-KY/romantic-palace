import React from 'react';

const Events = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-green-600 mt-32">Events at Romantic Palace</h2>
      <p className="mt-4">
        Our beautiful garden is perfect for hosting a variety of events, including weddings, birthday parties, and other gatherings.
        With ample space and a serene atmosphere, Romantic Palace provides an elegant backdrop for your special occasions.
      </p>
      <h3 className="text-2xl font-semibold mt-6">Testimonials</h3>
      <div className="mt-4">
        <blockquote className="border-l-4 border-green-600 pl-4 italic">
          "A magical venue for our wedding! The garden was stunning, and our guests couldn't stop raving about it." - Happy Couple
        </blockquote>
        <blockquote className="border-l-4 border-green-600 pl-4 italic mt-4">
          "We hosted a birthday party here, and it was a fantastic experience. Highly recommend!" - Satisfied Guest
        </blockquote>
      </div>
    </div>
  );
};

export default Events;