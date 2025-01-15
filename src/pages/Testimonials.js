import React from 'react';

const Testimonials = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-green-600 flex justify-center">Guest Testimonials</h2>
      <div className="mt-4">
        <blockquote className="border-l-4 border-green-600 pl-4 italic">
          "Staying at Romantic Palace was a dream come true! The ambiance was perfect for our family reunion." - Family of Four
        </blockquote>
        <blockquote className="border-l-4 border-green-600 pl-4 italic mt-4">
          "The garden is absolutely stunning! We had our wedding here, and it was magical." - Newlyweds
        </blockquote>
        <blockquote className="border-l-4 border-green-600 pl-4 italic mt-4">
          "A perfect getaway! The rooms were cozy, and the service was exceptional." - Happy Traveler
        </blockquote>
      </div>
    </div>
  );
};

export default Testimonials;