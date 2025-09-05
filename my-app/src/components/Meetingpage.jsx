import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function MeetingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center pt-24 md:pt-32 pb-12 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
          Meeting with{" "}
          <span className="text-[#8bca1e]">AI-Powered Recording</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          Effortlessly capture, transcribe, and analyze every meeting for improved
          productivity and clarity.
        </p>
        <button className="mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition">
          Start 30-day Free Trial
        </button>
      </section>


      {/* Video Section */}
      <section className="video-section flex justify-center items-center px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-16">
        <div className="  p-2 sm:p-4 max-w-5xl w-full">
          <iframe
            className="rounded-xl w-full"
            style={{ height: "clamp(220px, 50vh, 420px)" }}
            src="video.mp4"
            title="Meeting demo video"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="signup-form flex justify-center items-center py-12 sm:py-16 px-4 sm:px-6">
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden">
          {/* Left side with illustration */}
          <div className="hidden md:flex flex-col justify-center items-center bg-teal-50 md:w-1/2 p-8 lg:p-10">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 text-center mb-6">
              Find 3D Objects, Mockups <br /> and Illustrations here.
            </h2>
            <div className="w-52 h-52 lg:w-64 lg:h-64 bg-gradient-to-tr from-teal-200 to-pink-200 rounded-3xl flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg"
                alt="Card Illustration"
                className="w-28 h-28 lg:w-32 lg:h-32 object-contain rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right side - form */}
          <div className="flex-1 flex flex-col justify-center p-8 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Create Account</h2>

            {/* Social buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                aria-label="Sign up with Google"
                className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full hover:bg-gray-100 transition"
              >
                <FcGoogle size={22} />
                <span className="text-sm sm:text-base">Sign up with Google</span>
              </button>
              <button
                aria-label="Sign up with Facebook"
                className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full hover:bg-gray-100 transition"
              >
                <FaFacebook size={22} className="text-blue-600" />
                <span className="text-sm sm:text-base">Sign up with Facebook</span>
              </button>
            </div>

            <div className="text-center text-gray-500 mb-4">- OR -</div>

            {/* Form fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none text-sm sm:text-base"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none text-sm sm:text-base"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none text-sm sm:text-base"
                required
              />

              <button
                type="submit"
                className="w-full bg-teal-400 text-white font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-teal-500 transition text-sm sm:text-base"
              >
                Create Account
              </button>
            </form>

            <p className="mt-4 text-gray-600 text-center text-sm sm:text-base">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-teal-500 font-medium hover:underline"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
