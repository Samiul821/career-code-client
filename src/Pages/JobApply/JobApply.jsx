import React from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaRegStickyNote,
} from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const application = {
      name: form.name.value,
      applicant: form.email.value,
      phone: form.phone.value,
      linkedin: form.linkedin.value,
      github: form.github.value,
      resume: form.resume.value,
      coverLetter: form.coverLetter.value,
      jobId,
      userId: user?.uid,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your application has been submitted successfully!",
          });
        }
      })
      .catch((error) => {
        console.error("Application submit failed:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to submit application. Please try again!",
        });
      });
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200 p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-8"
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Apply for this Job: <Link to={`/jobs/${jobId}`}>Details</Link>
        </h2>

        <form onSubmit={handleApply} className="grid grid-cols-1 gap-6">
          {/* Full Name */}
          <div className="relative">
            <label className="label font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <FaUser className="text-purple-500" /> Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              defaultValue={user?.displayName || ""}
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="label font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <FaEnvelope className="text-purple-500" /> Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              defaultValue={user?.email || ""}
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="label font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <FaPhone className="text-purple-500" /> Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* LinkedIn */}
          <div className="relative">
            <label className="label font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <FaLinkedin className="text-purple-500" /> LinkedIn Profile
            </label>
            <input
              type="url"
              name="linkedin"
              required
              placeholder="LinkedIn profile URL"
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* GitHub */}
          <div className="relative">
            <label className="label font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <FaGithub className="text-purple-500" /> GitHub Profile
            </label>
            <input
              type="url"
              name="github"
              required
              placeholder="GitHub profile URL"
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Resume */}
          <div className="relative">
            <label className="label font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <FaFileAlt className="text-purple-500" /> Resume Link
            </label>
            <input
              type="url"
              name="resume"
              required
              placeholder="Link to your resume"
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Cover Letter */}
          <div className="relative">
            <label className="label font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <FaRegStickyNote className="text-purple-500" /> Cover Letter
            </label>
            <textarea
              name="coverLetter"
              rows="4"
              placeholder="Write a brief cover letter..."
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="w-full py-3 text-lg font-bold text-white rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg hover:shadow-xl transition duration-300"
          >
            Submit Application ✨
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default JobApply;
