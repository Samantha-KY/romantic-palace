import React from 'react';
import Testimonials from './Testimonials';

const About = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-5">
      <h2 className="text-3xl font-bold text-green-600 mt-32">About Romantic Palace</h2>
      <p className="mt-4">
        Romantic Palace is a charming house that offers a perfect blend of comfort and elegance. 
        Our property features:
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>A master bedroom with an ensuite bathroom, including a shower.</li>
        <li>A second bedroom and a separate bathroom with a shower.</li>
        <li>A fully equipped kitchen for all your culinary needs.</li>
        <li>A cozy living room for relaxation and gatherings.</li>
        <li>A shared large garden suitable for hosting events like weddings, birthday parties, and other gatherings.</li>
      </ul>
      <p className="mt-2">
        At Romantic Palace, we prioritize your comfort while ensuring a luxurious experience. 
        Whether you're here for a short stay or planning an event, we have everything you need.
      </p>
      <Testimonials/>
    </div>
  );
};

export default About;