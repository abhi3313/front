import React from "react";
import ResumeUploader from "../components/ResumeUploader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UploadPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto text-center my-12 px-4">
          <h1 className="text-3xl font-bold text-blue-700">Upload Your Resume</h1>
          <p className="mt-2 text-gray-600">
            We'll analyze it and show your technical and soft skills.
          </p>
        </div>
        <ResumeUploader />
      </main>
      <Footer />
    </div>
  );
};

export default UploadPage;