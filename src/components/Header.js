import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0">
      <div className="container flex justify-between items-center p-4">
        <div className="flex items-center ml-4">
          <img src="/images/logo.png" alt="Romantic Palace Logo" className="h-12" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-gray-700 hover:text-green-500">Home</a></li>
            <li><a href="/about" className="text-gray-700 hover:text-green-500">About</a></li>
            <li><a href="/gallery" className="text-gray-700 hover:text-green-500">Gallery</a></li>
            <li><a href="/events" className="text-gray-700 hover:text-green-500">Events</a></li>
            <li><a href="/booking" className="text-gray-700 hover:text-green-500">Booking</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-green-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;