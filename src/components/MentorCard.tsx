import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';

interface MentorCardProps {
  name: string;
  skill: string;
  rating: number;
  reviews: number;
  image: string;
  location: string;
  mode: string[];
}

export default function MentorCard({ name, skill, rating, reviews, image, location, mode }: MentorCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-600 flex items-center">
          <Star className="h-4 w-4 text-yellow-400 mr-1" />
          {rating} ({reviews})
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-indigo-600 font-medium">{skill}</p>
        
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
        
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          Available for: {mode.join(' & ')}
        </div>
        
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
          Request Mentorship
        </button>
      </div>
    </div>
  );
}