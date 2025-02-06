import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-2xl">
            <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-4">Get in Touch</h2>
            <p className="text-center text-gray-500 mb-6">We would love to hear from you! Feel free to reach out with any questions or feedback.</p>
            <form className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                    <input type="text" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                    <input type="email" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Your Message</label>
                    <textarea className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4" placeholder="Write your message here"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;