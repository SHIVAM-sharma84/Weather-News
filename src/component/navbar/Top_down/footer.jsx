import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300/50 rounded-t-4xl text-blue-700 mt-20 px-6 sm:px-10 lg:px-20 py-10">

      <div className="max-w-7xl mx-auto">

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo / About */}
          <div>
            <h2 className="text-3xl font-bold">
              Weather <span className="text-pink-400 font-light">Check</span>
            </h2>

            <p className="text-blue-700 mt-4 leading-7">
              Get accurate and updated weather information anytime,
              anywhere with Weather Check.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              Quick Links
            </h3>

            <ul className="space-y-3 text-blue-700">
              <li className="hover:text-white cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-white cursor-pointer transition">
                News
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Weather Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              Services
            </h3>

            <ul className="space-y-3 text-blue-700">
              <li>Current Weather</li>
              <li>Weather Forecast</li>
              <li>Weather News</li>
              <li>Location Search</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              Contact Us
            </h3>

            <p className="text-blue-700 mb-3">
              📧 weathercheck@gmail.com
            </p>

            <p className="text-blue-700">
              📍 Delhi, India
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-sm text-center">
              © 2026 Weather Check. All Rights Reserved.
            </p>

            <div className="flex gap-5 text-gray-400">
              <span className="hover:text-purple-400 cursor-pointer">
                Privacy Policy
              </span>

              <span className="hover:text-purple-400 cursor-pointer">
                Terms & Conditions
              </span>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;