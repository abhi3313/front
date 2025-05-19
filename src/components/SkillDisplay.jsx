import React from "react";
import { motion } from "framer-motion";

const SkillDisplay = ({ skills }) => {
  const hasSkills =
    skills &&
    Object.keys(skills).length > 0 &&
    Object.values(skills).some((v) =>
      Array.isArray(v) ? v.length > 0 : !!v
    );

  if (!hasSkills) {
    return (
      <div className="mt-8 text-center text-gray-500 px-4">
        <p className="text-lg font-medium">No skills found in the uploaded resume.</p>
        <p className="text-sm">Try uploading a different resume with more details.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="mt-8 px-4 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">📋 Extracted Skills</h3>

      <div className="space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* <h4 className="text-md font-bold text-blue-700 mb-2 flex items-center">
              📌 <span className="ml-2">{category}</span>
            </h4> */}

            {/* SKILLS ROW */}
            <div className="flex flex-wrap gap-2 w-full">
              {(Array.isArray(items) ? items : [items]).map((skill) => (
                <motion.span
                  key={skill}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full border border-blue-300 hover:bg-blue-200 transition"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  💻 {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillDisplay;

