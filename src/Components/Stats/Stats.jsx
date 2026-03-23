import React from "react";
import { IoDownloadSharp } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { LiaUsersCogSolid } from "react-icons/lia";

const Stats = () => {
  return (
    <div className="w-full text-center mt-12 bg-linear-to-r from-violet-600 via-purple-600 to-indigo-600 py-16 px-6">
      <h1 className="text-5xl font-bold mb-8 text-white">
        Trusted by Millions, Built for You
      </h1>

      <div className="flex justify-center">
        <div className="stats stats-vertical sm:stats-horizontal shadow-2xl w-full max-w-5xl">
          <div className="stat bg-white/10 backdrop-blur-sm text-white group hover:bg-white/20 transition-all duration-300">
            <div className="stat-figure text-white">
              <IoDownloadSharp className="text-5xl transition-transform duration-300 group-hover:scale-125" />
            </div>
            <div className="stat-title text-white">Total Downloads</div>
            <div className="stat-value text-white">29.6M</div>
            <div className="stat-desc text-white">21% more than last month</div>
          </div>

          <div className="stat bg-white/10 backdrop-blur-sm text-white group hover:bg-white/20 transition-all duration-300">
            <div className="stat-figure text-white">
              <IoStarSharp className="text-5xl transition-transform duration-300 group-hover:scale-125" />
            </div>
            <div className="stat-title text-white">Total Reviews</div>
            <div className="stat-value text-white">906K</div>
            <div className="stat-desc text-white">46% more than last month</div>
          </div>
          <div className="stat bg-white/10 backdrop-blur-sm text-white group hover:bg-white/20 transition-all duration-300">
            <div className="stat-figure text-white">
              <LiaUsersCogSolid className="text-5xl transition-transform duration-300 group-hover:scale-125" />
            </div>
            <div className="stat-title text-white">Total Reviews</div>
            <div className="stat-value text-white">906K</div>
            <div className="stat-desc text-white">46% more than last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
