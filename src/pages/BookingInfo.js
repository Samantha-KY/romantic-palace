import React from 'react';

const BookingInfo = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-green-600 mt-32">Booking Information</h2>
      <p className="mt-4">
        To book your stay at Romantic Palace, please follow the instructions below:
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>Visit our website and navigate to the booking section.</li>
        <li>Choose your desired dates and select the number of guests.</li>
        <li>Review the available packages and select the one that suits you best.</li>
        <li>Fill out the booking form with your details and submit.</li>
        <li>We will get back to you shortly to confirm your booking.</li>
      </ul>
      <h3 className="text-2xl font-semibold mt-6">Special Packages</h3>
      <p className="mt-4">
        We offer special packages for events and long stays. Please contact us for more details.
      </p>
      <p className="mt-4">
        For inquiries, feel free to reach out via our contact page.
      </p>
    </div>
  );
};

export default BookingInfo;