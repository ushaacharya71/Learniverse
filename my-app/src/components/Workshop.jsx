import React from "react";

export default function WorkshopSection() {
  return (
    <section className="relative bg-white py-24">
      {/* Top Dark Box */}
     <div className="bg-green-400 text-white text-center py-12 px-6 rounded-2xl max-w-5xl mx-auto relative z-10">
  <h2 className="text-4xl font-bold mb-3">Start Your Journey</h2>
  <p className="text-lg text-gray-800">
    Start your journey towards to you Corporate journey to unlock your true potential!
  </p>
</div>

      {/* Bottom Light Box - Smaller + Proper Spacing */}
      <div className="max-w-4xl mx-auto -mt-10 relative z-20">
        <div className="bg-blue-100 rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <p className="text-indigo-600 font-semibold uppercase">Masterclass</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
               Start your journey towards to you Corporate journey to unlock your true potential!
            </h3>
            <p className="text-gray-700 mt-4">
              Learn the science behind personal finance and easily achieve all
              your financial goals with peace of mind – with your Favourite Finance Guy.
            </p>

            <ul className="mt-6 space-y-3 text-gray-800">
              <li className="flex items-start gap-2">
                ✅ <span>You’ll be able to make informed decisions with your money.</span>
              </li>
              <li className="flex items-start gap-2">
                ✅ <span>You’ll build a high-returning portfolio tailored to your specific needs and risk appetite.</span>
              </li>
              <li className="flex items-start gap-2">
                ✅ <span>You’ll ensure that you, your spouse, children or other dependents are properly protected and insured.</span>
              </li>
            </ul>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya3Nob3B8ZW58MHx8MHx8fDA%3D"
              alt="Workshop"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
