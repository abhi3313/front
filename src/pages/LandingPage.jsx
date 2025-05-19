import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mt-32 px-4">
        <h1 className="text-5xl font-extrabold text-blue-800">Resume Skill Extractor</h1>
        <p className="mt-6 text-lg text-gray-700">
          Automatically extract categorized skills from your resume.
        </p>
        <button
          onClick={() => navigate("/upload")}
          className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>
      <footer className="text-center text-gray-500 py-6">© 2025 Resume Skill Extractor</footer>
    </div>
  );
};

export default LandingPage;