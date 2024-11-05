import React from 'react';
import Header from './components/Header';
import MentorCard from './components/MentorCard';

const mentors = [
  {
    name: "Dr. Sarah Chen",
    skill: "Data Science & Machine Learning",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    location: "San Francisco, CA",
    mode: ["Online", "Offline"]
  },
  {
    name: "James Wilson",
    skill: "Full Stack Development",
    rating: 4.8,
    reviews: 93,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800",
    location: "London, UK",
    mode: ["Online"]
  },
  {
    name: "Maria Garcia",
    skill: "UX/UI Design",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    location: "Barcelona, Spain",
    mode: ["Online", "Offline"]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Mentors</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Filter
            </button>
            <select className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              <option>Sort by Rating</option>
              <option>Sort by Experience</option>
              <option>Sort by Availability</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">Ready to share your expertise?</p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Become a Mentor
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;