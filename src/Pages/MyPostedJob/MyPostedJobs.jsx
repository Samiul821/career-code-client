import React, { Suspense } from "react";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import MyJobList from "./MyJobList";
import { jobsCreatedByPromise } from "../../api/jobsApi";
import Loading from "../Shared/Loading";

const MyPostedJobs = () => {
  const { user } = useAuth();

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-8">
      <motion.div
        className="max-w-5xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Your Posted Jobs
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Here's a list of jobs you've added. Stay on top of your hiring!
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Suspense fallback={<Loading />}>
          <MyJobList jobsCreatedPromise={jobsCreatedByPromise(user?.email, user.accessToken)} />
        </Suspense>
      </motion.div>
    </section>
  );
};

export default MyPostedJobs;
