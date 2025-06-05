import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const ViewApplications = () => {
  const { job_id } = useParams();
  const loadedApplications = useLoaderData();
  const [applications, setApplications] = useState(loadedApplications);

  const handleStatusChange = (e, app_id) => {
    const newStatus = e.target.value;

    axios
      .patch(`http://localhost:3000/applications/${app_id}`, {
        status: newStatus,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success(`Status updated to "${newStatus}" successfully!`);

          // Update local state instantly
          const updatedApps = applications.map((app) =>
            app._id === app_id ? { ...app, status: newStatus } : app
          );
          setApplications(updatedApps);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to update status!");
      });
  };

  return (
    <motion.div
      className="p-6 sm:p-10 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
          Applications for Job ID:{" "}
          <span className="text-indigo-600">{job_id}</span>
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Total Applications: {applications.length}
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-md bg-white dark:bg-gray-900">
        <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-700">
          <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 text-left">#</th>
              <th className="px-6 py-4 text-left">Applicant Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-sm text-gray-800 dark:text-gray-200">
            {applications.map((application, index) => (
              <motion.tr
                key={application._id}
                className="hover:bg-indigo-50 dark:hover:bg-indigo-800 transition"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <td className="px-6 py-4 font-semibold">{index + 1}</td>
                <td className="px-6 py-4">{application.name}</td>
                <td className="px-6 py-4">{application.applicant}</td>
                <td className="px-6 py-4">
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    value={application.status || "Pending"}
                    className="w-full max-w-[140px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-xs px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-500"
                  >
                    <option disabled value="Pending">
                      Update Status
                    </option>
                    <option value="Pending">Pending</option>
                    <option value="Interview">Interview</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ViewApplications;
