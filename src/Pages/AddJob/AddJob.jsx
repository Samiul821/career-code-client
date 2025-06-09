import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaBriefcase,
  FaMapMarkerAlt,
  FaImage,
  FaMoneyBill,
  FaUserTie,
  FaCalendarAlt,
  FaAlignLeft,
  FaListAlt,
  FaTasks,
  FaEnvelope,
} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // process salary range data
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = {
      min: Number(min),
      max: Number(max),
      currency,
    };

    // process requirements
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(",");
    const requirementsClean = requirementsDirty.map((req) => req.trim());
    newJob.requirements = requirementsClean;

    // process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    newJob.status = "active";

    console.log(newJob);

    // save job to the database
    axios
      .post("https://career-code-server-dun.vercel.app/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Job Added Successfully!",
            text: "This new Job has been saved and published.",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while saving the job!",
          confirmButtonColor: "#d33",
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
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-8"
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Add A New Job
        </h2>

        <form
          onSubmit={handleAddJob}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Job Title */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-lg font-semibold text-gray-800">
              <FaBriefcase className="text-purple-500" /> Job Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="e.g., Frontend Developer"
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-lg font-semibold text-gray-800">
              <FaBuilding className="text-purple-500" /> Company Name
            </label>
            <input
              type="text"
              name="company"
              required
              placeholder="Company Name"
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Location */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-lg font-semibold text-gray-800">
              <FaMapMarkerAlt className="text-purple-500" /> Location
            </label>
            <input
              type="text"
              name="location"
              required
              placeholder="Company Location"
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Company Logo URL */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-lg font-semibold text-gray-800">
              <FaImage className="text-purple-500" /> Company Logo URL
            </label>
            <input
              type="url"
              name="company_logo"
              required
              placeholder="https://example.com/logo.png"
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Job Type */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 mb-4 text-xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              <FaTasks className="text-purple-500" /> Job Type
            </label>
            <div className="flex flex-wrap gap-6 justify-start">
              <label className="relative cursor-pointer rounded-2xl border-2 border-purple-200 px-8 py-4 flex items-center gap-4 shadow-md bg-white hover:border-pink-500 transition duration-300 group">
                <input
                  type="radio"
                  name="jobType"
                  value="All"
                  required
                  className="absolute opacity-0 peer"
                />
                <div className="w-6 h-6 rounded-full border-2 border-purple-600 peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-blue-500 transition duration-300"></div>
                <span className="text-gray-800 font-medium group-hover:text-pink-600 transition duration-300">
                  All
                </span>
              </label>

              <label className="relative cursor-pointer rounded-2xl border-2 border-purple-200 px-8 py-4 flex items-center gap-4 shadow-md bg-white hover:border-pink-500 transition duration-300 group">
                <input
                  type="radio"
                  name="jobType"
                  value="On-Site"
                  required
                  className="absolute opacity-0 peer"
                />
                <div className="w-6 h-6 rounded-full border-2 border-purple-600 peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-blue-500 transition duration-300"></div>
                <span className="text-gray-800 font-medium group-hover:text-pink-600 transition duration-300">
                  On-Site
                </span>
              </label>

              <label className="relative cursor-pointer rounded-2xl border-2 border-purple-200 px-8 py-4 flex items-center gap-4 shadow-md bg-white hover:border-pink-500 transition duration-300 group">
                <input
                  type="radio"
                  name="jobType"
                  value="Remote"
                  required
                  className="absolute opacity-0 peer"
                />
                <div className="w-6 h-6 rounded-full border-2 border-purple-600 peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-blue-500 transition duration-300"></div>
                <span className="text-gray-800 font-medium group-hover:text-pink-600 transition duration-300">
                  Remote
                </span>
              </label>

              <label className="relative cursor-pointer rounded-2xl border-2 border-purple-200 px-8 py-4 flex items-center gap-4 shadow-md bg-white hover:border-pink-500 transition duration-300 group">
                <input
                  type="radio"
                  name="jobType"
                  value="Hybrid"
                  required
                  className="absolute opacity-0 peer"
                />
                <div className="w-6 h-6 rounded-full border-2 border-purple-600 peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-blue-500 transition duration-300"></div>
                <span className="text-gray-800 font-medium group-hover:text-pink-600 transition duration-300">
                  Hybrid
                </span>
              </label>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-lg font-semibold text-gray-800">
              <FaTasks className="text-purple-500" /> Job Category
            </label>
            <select
              name="category"
              required
              defaultValue=""
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="" disabled>
                Select a Category
              </option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
            </select>
          </div>

          {/* Application Deadline */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-lg font-semibold text-gray-800">
              <FaCalendarAlt className="text-purple-500" /> Application Deadline
            </label>
            <input
              type="date"
              name="applicationDeadline"
              required
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Salary */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-lg font-semibold text-gray-800 mb-2">
                Minimum Salary
              </label>
              <input
                type="number"
                name="min"
                required
                placeholder="Min Salary"
                className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="text-lg font-semibold text-gray-800 mb-2">
                Maximum Salary
              </label>
              <input
                type="number"
                name="max"
                required
                placeholder="Max Salary"
                className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="text-lg font-semibold text-gray-800 mb-2">
                Currency
              </label>
              <select
                name="currency"
                required
                className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option disabled value="">
                  Select Currency
                </option>
                <option>BDT</option>
                <option>USD</option>
                <option>EURO</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 mb-2 text-lg font-semibold text-gray-800">
              <FaAlignLeft className="text-purple-500" /> Job Description
            </label>
            <textarea
              name="description"
              required
              rows="5"
              placeholder="Describe the job in detail"
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            ></textarea>
          </div>

          {/* Requirements */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 mb-2 text-lg font-semibold text-gray-800">
              <FaListAlt className="text-purple-500" /> Job Requirements
            </label>
            <textarea
              name="requirements"
              required
              rows="3"
              placeholder="Requirements (separate by comma)"
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            ></textarea>
          </div>

          {/* Responsibilities */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 mb-2 text-lg font-semibold text-gray-800">
              <FaTasks className="text-purple-500" /> Responsibilities
            </label>
            <textarea
              name="responsibilities"
              required
              rows="3"
              placeholder="Responsibilities (separate by comma)"
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            ></textarea>
          </div>

          {/* HR Contact Info */}
          <div className="md:col-span-2 space-y-4">
            <label className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <FaUserTie className="text-purple-500" /> HR Name
            </label>
            <input
              type="text"
              name="hr_name"
              required
              placeholder="Enter HR name"
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <label className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <FaUserTie className="text-purple-500" /> HR Email
            </label>
            <input
              type="email"
              name="hr_email"
              defaultValue={user.email}
              required
              placeholder="hr@example.com"
              className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-800 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-10 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-3xl text-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition transform"
            >
              Add Job
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddJob;
