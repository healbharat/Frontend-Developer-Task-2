import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log('Subscribed with email:', email);
    setSubscribed(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Our Travel Deals</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">Subscribe to our newsletter and be the first to know about exclusive offers, new destinations, and travel tips.</p>
        
        {subscribed ? (
          <div className="bg-green-500 text-white py-4 px-6 rounded-lg inline-block animate-pulse">
            <p className="text-lg font-semibold">Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow py-4 px-6 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        )}
        
        <p className="mt-6 text-blue-200">We respect your privacy and will never share your information.</p>
      </div>
    </section>
  );
};

export default Newsletter;