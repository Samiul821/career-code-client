import React, { use } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const MyJobList = ({ jobsCreatedPromise }) => {
  const jobs = use(jobsCreatedPromise);

  return (
    <motion.div
      className="p-8 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-neutral-800 dark:text-white tracking-tight">
        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Your Posted Jobs
        </span>{" "}
        ({jobs.length})
      </h2>

      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl">
        <table className="min-w-full table-auto bg-white dark:bg-gray-900 text-sm text-left text-gray-700 dark:text-gray-200">
          <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm uppercase tracking-wide">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Deadline</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Applications</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {jobs.map((job, index) => (
              <motion.tr
                key={job._id}
                className="hover:bg-indigo-50 dark:hover:bg-indigo-800 transition duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                <td className="px-6 py-4 font-medium">{index + 1}</td>
                <td className="px-6 py-4">{job.title}</td>
                <td className="px-6 py-4">{job.applicationDeadline}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      job.status === "Closed"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {job.status || "Active"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/applications/${job._id}`}
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow transition duration-200"
                  >
                    View
                  </Link>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default MyJobList;
