import React, { useState } from "react";
import API from "../api"; // axios instance
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function MeetingPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    gender: "",
    school_college: "",
    course_interested: "",
    message: "",
  });

  const [success, setSuccess] = useState(null); // null = no state, true = success, false = error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("students/", formData); // send to backend
      console.log("Saved:", res.data);

      setSuccess(true);

      // reset form after success
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        contact_number: "",
        gender: "",
        school_college: "",
        course_interested: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess(false);
    }
  };

  return (
    <div className="w-full font-sans">
      {/* Background Video */}
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
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Form Section */}
      <section className="flex justify-center items-center py-16 px-4 sm:px-6 bg-gray-100">
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 sm:p-10 text-gray-900">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Connect with Us
          </h2>

          {/* Success / Error Messages */}
          {success === true && (
            <p className="text-green-600 text-center mb-4">
              ✅ Form submitted successfully!
            </p>
          )}
          {success === false && (
            <p className="text-red-600 text-center mb-4">
              ❌ Something went wrong. Please try again.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
              required
            />

            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
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
              type="tel"
              name="contact_number"
              placeholder="Contact Number"
              value={formData.contact_number}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
              required
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="text"
              name="school_college"
              placeholder="School / College"
              value={formData.school_college}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
              required
            />

            <input
              type="text"
              name="course_interested"
              placeholder="Course Interested"
              value={formData.course_interested}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
