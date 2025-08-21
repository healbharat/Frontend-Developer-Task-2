import React, { useState } from 'react';
import TourCard from '../components/TourCard';

const Tours = () => {
  const [sortBy, setSortBy] = useState('popularity');
  
  const tours = [
    {
      id: 1,
      name: "Greek Island Hopping",
      image: "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1638&q=80",
      description: "Explore the beautiful islands of Greece with this 10-day island hopping tour.",
      duration: "10 days",
      price: 1899,
      rating: 4.9,
      groupSize: "Small (max 12)"
    },
    {
      id: 2,
      name: "Japanese Cultural Journey",
      image: "https://images.unsplash.com/photo-1598797367116-810eb5720bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      description: "Immerse yourself in traditional Japanese culture from Kyoto to Tokyo.",
      duration: "14 days",
      price: 2599,
      rating: 4.8,
      groupSize: "Medium (max 16)"
    },
    {
      id: 3,
      name: "Peruvian Adventure",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Trek to Machu Picchu and explore the Sacred Valley of the Incas.",
      duration: "8 days",
      price: 1499,
      rating: 4.7,
      groupSize: "Small (max 10)"
    },
    {
      id: 4,
      name: "Italian Culinary Tour",
      image: "https://images.unsplash.com/photo-1533779309914-8e168aef6c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Taste your way through Italy from Rome to Florence and Bologna.",
      duration: "12 days",
      price: 2199,
      rating: 4.9,
      groupSize: "Small (max 8)"
    },
    {
      id: 5,
      name: "Swiss Alpine Experience",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Hike through the stunning Swiss Alps and enjoy picturesque mountain villages.",
      duration: "9 days",
      price: 1999,
      rating: 4.8,
      groupSize: "Small (max 12)"
    },
    {
      id: 6,
      name: "Balinese Wellness Retreat",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Rejuvenate your mind and body with yoga, meditation, and Balinese healing traditions.",
      duration: "7 days",
      price: 1299,
      rating: 4.7,
      groupSize: "Small (max 10)"
    }
  ];

  const sortedTours = [...tours].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'duration') {
      return parseInt(b.duration) - parseInt(a.duration);
    } else {
      return b.rating - a.rating; // popularity (default)
    }
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Tour Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our carefully curated tour packages designed to provide unforgettable experiences</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800">{sortedTours.length} Tours Available</h2>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-700">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="popularity">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;