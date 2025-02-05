import React from 'react';

const SpecialOffers = () => {
  return (
    <section className="special-offers py-16 bg-yellow-400 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white">Special Offer: 20% Off on Selected Flights!</h2>
        <p className="mt-4 text-lg text-white">
          Limited time offer. Book now and save big on your next trip!
        </p>
        <button className="mt-6 bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default SpecialOffers;
