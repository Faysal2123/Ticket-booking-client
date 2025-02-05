import React from 'react';
import { FaHeadset, FaRegMoneyBillAlt } from 'react-icons/fa';

import { IoIosAirplane } from 'react-icons/io';

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Why Choose Us for Your Next Flight?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We offer a seamless and hassle-free ticket booking experience.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white">
              <IoIosAirplane className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">Easy Booking</h3>
            <p className="mt-2 text-base text-gray-600">
              Book your flight tickets in just a few clicks, anywhere, anytime.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500 text-white">
              <FaRegMoneyBillAlt className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">Affordable Prices</h3>
            <p className="mt-2 text-base text-gray-600">
              Get the best deals on flight tickets with exclusive discounts.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500 text-white">
              <FaHeadset className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">24/7 Support</h3>
            <p className="mt-2 text-base text-gray-600">
              Our support team is available round-the-clock to assist you with any issue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
