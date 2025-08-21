import React, { useState } from 'react';
import DestinationCard from '../components/DestinationCard';

const Destinations = () => {
  const [filter, setFilter] = useState('all');
  
  const destinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      description: "Experience the stunning sunsets and white-washed buildings of this iconic Greek island.",
      category: "beach",
      price: 1200,
      rating: 4.9
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Discover ancient temples, traditional gardens, and rich cultural heritage.",
      category: "cultural",
      price: 1800,
      rating: 4.8
    },
    {
      id: 3,
      name: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      description: "Trek to one of the world's most famous archaeological sites in the Andes Mountains.",
      category: "adventure",
      price: 1500,
      rating: 4.7
    },
    {
      id: 4,
      name: "Swiss Alps, Switzerland",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Enjoy breathtaking mountain views and world-class skiing in the heart of Europe.",
      category: "adventure",
      price: 2200,
      rating: 4.9
    },
    {
      id: 5,
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      description: "Relax on pristine beaches and immerse yourself in the island's spiritual culture.",
      category: "beach",
      price: 1100,
      rating: 4.6
    },
    {
      id: 6,
      name: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1552832230-c0197045d904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Explore ancient ruins, Renaissance art, and indulge in authentic Italian cuisine.",
      category: "cultural",
      price: 1300,
      rating: 4.7
    }
  ];

  const filteredDestinations = filter === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === filter);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Destinations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover amazing places around the world with our curated selection of destinations</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('beach')}
              className={`px-6 py-3 text-sm font-medium ${filter === 'beach' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Beach
            </button>
            <button
              onClick={() => setFilter('adventure')}
              className={`px-6 py-3 text-sm font-medium ${filter === 'adventure' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Adventure
            </button>
            <button
              onClick={() => setFilter('cultural')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${filter === 'cultural' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Cultural
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No destinations found in this category. Please try another filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;