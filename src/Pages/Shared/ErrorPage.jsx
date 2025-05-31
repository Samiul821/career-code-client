import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-300 via-pink-200 to-yellow-200 p-6">
      <FaExclamationTriangle className="text-red-600 text-8xl mb-6 animate-pulse" />
      <h1 className="text-6xl font-extrabold text-red-700 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-center text-gray-700">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
