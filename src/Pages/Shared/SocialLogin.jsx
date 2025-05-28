import React, { use } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Login Successful!",
          text: `Welcome, ${user.displayName || "User"} 👋`,
          icon: "success",
          confirmButtonText: "Awesome!",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="w-full max-w-sm mx-auto px-4">
      <div className="flex items-center gap-2 my-6">
        <div className="h-px flex-1 bg-gray-300"></div>
        <span className="text-sm text-gray-500 font-medium">OR</span>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>

      {/* Google Login Button with Framer Motion */}
      <motion.button
        onClick={handleGoogleSignIn}
        whileHover={{ scale: 1.03, boxShadow: "0px 8px 16px rgba(0,0,0,0.1)" }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-full flex items-center justify-center gap-3 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 text-base font-semibold shadow-md"
        aria-label="Login with Google"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 533.5 544.3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M533.5 278.4c0-17.4-1.5-34.2-4.3-50.4H272v95.3h146.6c-6.3 33.6-25.2 62.2-53.7 81.3v67h86.7c50.8-46.8 81.9-115.7 81.9-193.2z"
            fill="#4285F4"
          />
          <path
            d="M272 544.3c72.6 0 133.5-24.1 178-65.4l-86.7-67c-24.1 16.2-55 25.6-91.3 25.6-70 0-129.3-47.2-150.5-110.7H32.5v69.8C76.6 482.8 167.3 544.3 272 544.3z"
            fill="#34A853"
          />
          <path
            d="M121.5 326.8c-10.5-31.2-10.5-64.9 0-96.1V161H32.5c-37.7 75.5-37.7 164.8 0 240.3l89-74.5z"
            fill="#FBBC05"
          />
          <path
            d="M272 107.7c39.5-.6 77.4 13.9 106.2 39.9l79.4-79.4C414.5 25.1 345.4-1.3 272 0 167.3 0 76.6 61.5 32.5 161l89 69.7c21.1-63.6 80.5-110.7 150.5-110.7z"
            fill="#EA4335"
          />
        </svg>
        <span>Continue with Google</span>
      </motion.button>
    </div>
  );
};

export default SocialLogin;
