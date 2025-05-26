import React, { use } from "react";
import Lottie from "lottie-react";
import registerLottie from "../../assets/lotties/register.json";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();

        Swal.fire({
          title: "Registration Successful!",
          text: "Your account has been created.",
          icon: "success",
          confirmButtonColor: "#14b8a6",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        console.error("Error creating user:", error);

        Swal.fire({
          title: "Oops!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#f43f5e",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Background Light Effects */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full top-[-100px] left-[-80px] z-0"></div>
      <div className="absolute w-72 h-72 bg-teal-400/20 blur-[100px] rounded-full bottom-[-100px] right-[-50px] z-0"></div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-20 w-full max-w-7xl z-10">
        {/* Register Form */}
        <div className="w-full max-w-md relative bg-white/5 border border-white/20 backdrop-blur-2xl rounded-[25px] p-7 md:p-10 shadow-[0_0_30px_rgba(0,255,255,0.05)] overflow-hidden group">
          {/* Animated Border Effect */}
          <div className="absolute -inset-[2px] rounded-[25px] bg-gradient-to-tr from-cyan-400 via-transparent to-teal-400 opacity-30 blur-lg z-[-1] group-hover:opacity-50 transition-opacity duration-500"></div>

          <h2 className="text-white text-4xl font-bold text-center mb-2">
            Create Your Account
          </h2>
          <p className="text-white/60 text-sm text-center mb-8">
            Join us and explore limitless possibilities!
          </p>

          <form onSubmit={handleRegister} className="space-y-7">
            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="peer w-full bg-transparent border border-white/30 rounded-xl px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                placeholder="Email address"
              />
              <label className="absolute left-4 top-2 text-sm text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white/60 transition-all">
                Email address
              </label>
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type="password"
                name="password"
                required
                className="peer w-full bg-transparent border border-white/30 rounded-xl px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                placeholder="Password"
              />
              <label className="absolute left-4 top-2 text-sm text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white/60 transition-all">
                Password
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-400 to-teal-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all"
            >
              Register
            </button>
            {/* Already have an account? */}
            <p className="text-sm text-white/70 text-center mt-4">
              Already have an account?{" "}
              <Link
                to="/signIn"
                className="text-cyan-400 hover:text-teal-300 font-medium underline-offset-2 hover:underline transition"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>

        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Lottie
            className="w-80 lg:w-[450px]"
            animationData={registerLottie}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
