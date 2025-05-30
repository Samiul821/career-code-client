import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = useLoaderData();

  return (
    <motion.div
      className="max-w-3xl mx-auto mt-16 bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] rounded-3xl p-8 border border-green-400/10 shadow-[0_0_60px_#00ff8855] text-white relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={company_logo}
          alt="Company Logo"
          className="w-16 h-16 object-contain rounded-lg border border-white/10"
        />
        <div>
          <h2 className="text-3xl font-bold text-green-400">{title}</h2>
          <p className="text-gray-300">{company}</p>
          <p className="text-sm text-gray-400">
            {location} • {jobType} • {category}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-200">{description}</p>

      {/* Salary & Deadline & Status */}
      <div className="mt-6 space-y-2 text-gray-300">
        <p>
          💰 <span className="text-white font-semibold">Salary:</span> $
          {salaryRange.min} - ${salaryRange.max}
        </p>
        <p>
          📅 <span className="text-white font-semibold">Deadline:</span>{" "}
          {applicationDeadline}
        </p>
        <p>
          🔒 <span className="text-white font-semibold">Status:</span> {status}
        </p>
      </div>

      {/* Responsibilities */}
      <div className="mt-6">
        <h4 className="text-white font-semibold text-lg mb-2">
          ✅ Responsibilities
        </h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mt-6">
        <h4 className="text-white font-semibold text-lg mb-2">
          📌 Requirements
        </h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      {/* HR Info */}
      <div className="mt-6 text-gray-300 space-y-1">
        <p>
          🧑‍💼 <span className="text-white font-semibold">HR:</span> {hr_name}
        </p>
        <p>
          📧 <span className="text-white font-semibold">Email:</span> {hr_email}
        </p>
      </div>

      {/* Apply Now Button */}
      <Link to={`/jobApply/${_id}`}>
        <button className="mt-8 w-full py-3 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-white shadow-lg transition-all">
          🚀 Apply Now
        </button>
      </Link>
    </motion.div>
  );
};

export default JobDetails;
