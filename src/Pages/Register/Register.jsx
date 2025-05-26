import Lottie from "lottie-react";
import React from "react";
import registerLottie from "../../assets/lotties/register.json";

const Register = () => {

 const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Email:", email, "Password:", password);
 }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#1e293b] to-[#0f172a] flex items-center justify-center px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 w-full max-w-6xl">
        {/* Register Form */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-extrabold text-center text-white mb-8 tracking-tight">
            Create Account
          </h1>
          <form onSubmit={handleRegister} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input w-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input w-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="btn btn-accent w-full text-white font-semibold tracking-wide hover:scale-[1.03] transition-transform"
            >
              Register
            </button>
          </form>
        </div>

        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Lottie
            className="w-72 lg:w-96"
            animationData={registerLottie}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
