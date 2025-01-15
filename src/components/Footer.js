import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md w-full fixed bottom-0 left-0 right-0">
      <div className="container mx-auto p-4 text-center">
        <p className="text-gray-600">© 2025 Romantic Palace. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
          <a href="#" className="text-green-600 hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;