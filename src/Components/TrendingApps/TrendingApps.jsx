import React from "react";
import TrendingAppsCard from "../TrendingAppsCard/TrendingAppsCard";
import { Link } from "react-router";
import { FaArrowTrendUp } from "react-icons/fa6";

const TrendingApps = ({ appsData }) => {
  const topApps = appsData.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <h2 className="text-5xl font-bold mb-3 flex items-center justify-center gap-2">
        Trending Apps <FaArrowTrendUp className="text-purple-600" />
      </h2>
      <p className="text-gray-500 mb-8">
        Discover the most popular and trending apps right now
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {topApps.map((appData) => (
          <TrendingAppsCard key={appData.id} appData={appData} />
        ))}
      </div>

      <button className="mt-10 px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">
        <Link to={"/apps"}>Show All Apps</Link>
      </button>
    </div>
  );
};

export default TrendingApps;
