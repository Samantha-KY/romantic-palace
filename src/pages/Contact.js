import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to an API
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-green-600 mt-32">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border rounded w-full py-2 px-3"
            rows="4"
          />
        </div>
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
          Send Message
        </button>
      </form>
      <div className="mt-6 pb-32">
        <h3 className="text-2xl font-semibold">Contact Details</h3>
        <p>Phone: +250 782 181 047</p>
        <p>Email: murera@rp.com</p>
        <p>Address: Huye, Rwanda</p>
      </div>
    </div>
  );
};

export default Contact;