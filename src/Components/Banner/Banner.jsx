import React from "react";
import heroImage from "../../assets/hero.png";
import playStoreImage from "..//..//assets/play-store-google.jpg";
import appStoreImage from "..//..//assets/App_Store_(iOS).svg.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-linear-to-br from-violet-50 to-gray-100">
      <div className="hero-content text-center">
        <div className="max-w-9xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">We build</span>
            <span className="block">
              <span className="text-violet-600">Productive</span> Apps
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-4xl mx-auto">
            At <span className="font-semibold">digicacy.com</span>, we craft
            innovative apps designed to make everyday life simpler, smarter, and
            more exciting. Our goal is to turn your ideas into digital
            experiences that truly make an impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link
              to="https://play.google.com/store/apps"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm hover:shadow-md hover:scale-105 hover:bg-gray-200 transition"
            >
              <img
                src={playStoreImage}
                alt="Google Play"
                className="w-6 h-6 object-contain"
              />
              <span className="font-bold text-gray-800">Google Play</span>
            </Link>

            <Link
              to={"https://www.apple.com/app-store/"}
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm hover:shadow-md hover:scale-105 hover:bg-gray-200 transition"
            >
              <img
                src={appStoreImage}
                alt="App Store"
                className="w-6 h-6 object-contain"
              />
              <span className="font-bold text-gray-800">App Store</span>
            </Link>
          </div>
          <div className="mt-10 flex justify-center">
            <img
              src={heroImage}
              alt="App preview"
              className="w-full max-w-3xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
