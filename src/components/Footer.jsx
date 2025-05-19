import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-center text-gray-500 py-4 border-t">
      © {new Date().getFullYear()} Resume Skill Extractor. All rights reserved.
    </footer>
  );
};

export default Footer;