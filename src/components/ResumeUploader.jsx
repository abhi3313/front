import React, { useState, useRef } from "react";
import axios from "axios";
import SkillDisplay from "./SkillDisplay";

const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [skills, setSkills] = useState([]);  // Using array to store skills
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null); 

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setSkills([]);
    } else {
      alert("Only PDF files are allowed.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
      setSkills([]);
    } else {
      alert("Only PDF files are allowed.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleZoneClick = () => {
    fileInputRef.current.click(); 
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setUploadProgress(0);
      setSkills([]);

      const response = await axios.post(
        "http://backend-production-e16f.up.railway.app/upload/", // Using the environment variable for URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percent);
          },
        }
      );

      setSkills(response.data.skills || []); // Ensure skills is an array

    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload or extract skills.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Resume Skill Extractor</h2>

      <div
        onClick={handleZoneClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-gray-400 p-8 rounded-lg text-center cursor-pointer hover:bg-gray-100 transition"
      >
        {file ? (
          <p className="text-green-700 font-semibold">{file.name}</p>
        ) : (
          <p className="text-gray-600">Click or drag & drop a PDF file here</p>
        )}
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileSelect}
          ref={fileInputRef}
          className="hidden"
        />
      </div>

      <div className="text-center mt-4">
        <button
          onClick={handleUpload}
          disabled={loading || !file}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Extract Skills"}
        </button>
      </div>

      {loading && (
        <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-200"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}

      <div className="max-w-full mx-auto p-6">
        {skills.length > 0 ? (
          <SkillDisplay skills={skills} />
        ) : (
          !loading && <p>No skills extracted yet. Please upload a resume.</p>
        )}
      </div>
    </div>
  );
};

export default ResumeUploader;
