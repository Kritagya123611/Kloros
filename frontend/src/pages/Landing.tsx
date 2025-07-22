import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4">
      <h1 className="text-5xl font-extrabold tracking-wide mb-6">Welcome to Kloros</h1>
      <p className="text-lg text-gray-300 mb-10">This is the landing page.</p>
      <button onClick={() => navigate("/signup")} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-full text-lg font-medium shadow-md">
        Wanna Sign Up?
      </button>
    </div>
  );
}
