import React from "react";
import { motion } from "framer-motion";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero max-w-[1600px] mx-auto px-4 py-12">
      <div className="hero-content flex-col lg:flex-row-reverse items-center gap-10">
        {/* Image Section - same as your style */}
        <div className="flex-1 flex flex-col items-center gap-6">
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={team1}
            alt="Team 1"
            className="w-72 md:w-80 lg:w-96 border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />

          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 8, delay: 5, repeat: Infinity }}
            src={team2}
            alt="Team 2"
            className="w-72 md:w-80 lg:w-96 border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: ["#e74c3c", "#2ed573", "#7d5fff"],
                transition: { duration: 2, repeat: Infinity },
              }}
              className="inline-block"
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6 text-gray-600 text-base md:text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary px-6 py-2 rounded-full text-white text-lg shadow-md hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
