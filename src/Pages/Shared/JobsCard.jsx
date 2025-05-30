import React, { useRef, useState, useEffect } from "react";
import { MdMyLocation } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const JobsCard = ({ job }) => {
  const {
    title,
    status,
    description,
    company_logo,
    location,
    company,
    jobType,
    category,
    applicationDeadline,
  } = job;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hiddenDown: { opacity: 0, y: 40 },
    hiddenUp: { opacity: 0, y: -40 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hiddenDown"
      animate={
        isInView
          ? "visible"
          : scrollDirection === "down"
          ? "hiddenDown"
          : "hiddenUp"
      }
      className="max-w-xl mx-auto bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 cursor-pointer select-none flex flex-col"
      style={{ minHeight: "450px" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
      }}
    >
      {/* Top section: Logo, Company & Location */}
      <div className="flex items-center gap-5 mb-6">
        <img
          src={company_logo}
          alt={company}
          className="w-20 h-20 rounded-xl object-contain bg-white/70 p-2"
        />
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900">{company}</h3>
          <p className="flex items-center text-gray-600 mt-1 text-sm gap-1">
            <MdMyLocation className="text-lg" />
            {location}
          </p>
        </div>
        <div className="ml-auto">
          <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
            {status}
          </span>
        </div>
      </div>

      {/* Title */}
      <motion.h2
        whileHover={{ color: "#2563eb", scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-extrabold text-gray-900 mb-4"
      >
        {title}
      </motion.h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 flex-grow">{description}</p>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-6 mb-6 text-gray-800 text-sm font-medium">
        <div>
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Job Type:</span> {jobType}
          </p>
          <p>
            <span className="font-semibold">Deadline:</span>{" "}
            {applicationDeadline}
          </p>
        </div>
      </div>

      {/* Apply Now Button */}
      <Link to={`/jobsDetails/${job._id}`}>
        <motion.button
          whileHover={{
            scale: 1.07,
            boxShadow: "0 10px 20px rgba(37, 99, 235, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="mt-auto w-full bg-blue-600 text-white font-bold py-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
        >
          Show Details
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default JobsCard;
