import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Lottie from "lottie-react";
import loginLottie from "../../assets/lotties/login.json";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
  const { signInUser, forgetPassword } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          confirmButtonColor: "#3b82f6",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Reset Password",
      input: "email",
      inputLabel: "Please enter your email address",
      inputPlaceholder: "your-email@example.com",
      showCancelButton: true,
      confirmButtonText: "Send Reset Link",
      cancelButtonText: "Cancel",
      inputValidator: (value) => {
        if (!value) {
          return "Email is required!";
        }
        return null;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const email = result.value;
        forgetPassword(email)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Reset link sent!",
              text: "Please check your email to reset your password.",
              timer: 3000,
              showConfirmButton: false,
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops!",
              text: error.message || "Something went wrong.",
            });
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] flex flex-col-reverse lg:flex-row items-center justify-center px-4 py-10 gap-8 lg:gap-20">
      {/* Login Form */}
      <div className="w-full max-w-md bg-white/5 border border-white/20 backdrop-blur-2xl rounded-[25px] p-7 md:p-10 shadow-lg relative overflow-hidden group">
        <div className="absolute -inset-[2px] rounded-[25px] bg-gradient-to-tr from-blue-500 via-transparent to-indigo-500 opacity-30 blur-lg z-[-1] group-hover:opacity-50 transition-all duration-500"></div>

        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-white/60 text-sm text-center mb-8">
          Please login to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-7">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full bg-transparent border border-white/30 rounded-xl px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Email address"
            />
            <label className="absolute left-4 top-2 text-sm text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white/60 transition-all">
              Email address
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              required
              className="peer w-full bg-transparent border border-white/30 rounded-xl px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Password"
            />
            <label className="absolute left-4 top-2 text-sm text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white/60 transition-all">
              Password
            </label>
          </div>
          {/* Forgot Password link outside the input field */}
          <div className="text-right mt-1">
            <button
              type="button"
              onClick={handleForgetPassword}
              className="text-sm text-blue-400 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all"
          >
            Login
          </button>
        </form>

        <SocialLogin></SocialLogin>

        <p className="text-white/60 text-sm text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:underline transition"
          >
            Register here
          </Link>
        </p>
      </div>
      {/* Lottie Animation */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Lottie
          className="w-72 md:w-96 lg:w-[450px]"
          animationData={loginLottie}
          loop={true}
        />
      </div>
    </div>
  );
};

export default Login;
