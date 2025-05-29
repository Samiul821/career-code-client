import React, { use } from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);

  return (
    <section className="py-12 px-[3%] md:px-[5%] lg:px-[10%] bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          🔥 Hot Jobs of the Day
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Discover the most in-demand jobs handpicked for you
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default HotJobs;
