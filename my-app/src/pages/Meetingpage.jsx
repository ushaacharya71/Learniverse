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
    <div className="w-full font-sans">
      {/* ✅ Fullscreen Background Video */}
      <div className="relative h-screen w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ✅ Signup Form Section BELOW video */}
      <section className="flex justify-center items-center py-16 px-4 sm:px-6 bg-gray-100">
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 sm:p-10 text-gray-900">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Create Account
          </h2>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full hover:bg-gray-100 transition">
              <FcGoogle size={22} />
              <span>Sign up with Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full hover:bg-gray-100 transition">
              <FaFacebook size={22} className="text-blue-500" />
              <span>Sign up with Facebook</span>
            </button>
          </div>

          <div className="text-center text-gray-500 mb-4">- OR -</div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600 transition"
            >
              Create Account
            </button>
          </form>

          <p className="mt-4 text-gray-600 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-teal-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
