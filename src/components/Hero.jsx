import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80')" }}
      ></div>
      
      <div className="z-20 text-white px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Discover the World's Beauty</h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">Explore unique destinations and create unforgettable memories with our expertly crafted tours.</p>
        
        <div className="relative max-w-xl mx-auto animate-slide-up">
          <input 
            type="text" 
            placeholder="Search destinations, tours, or experiences..." 
            className="w-full py-4 px-6 rounded-full shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-2 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            Search
          </button>
        </div>
        
        <div className="mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Explore Tours
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 z-20 animate-bounce">
        <svg className="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;