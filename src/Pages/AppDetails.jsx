import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FiDownload } from "react-icons/fi";
import { RiStarSFill } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import RatingChart from "../Components/RatingChart/RatingChart";
import { toast } from "react-toastify";
import { getInstalledApps, saveInstalledApps } from "/utils/localStorage";

const AppDetails = () => {
  const app = useLoaderData();

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  const [isInstalled, setIsInstalled] = useState(() => {
    const installedApps = getInstalledApps();
    const installedIds = installedApps.map((a) => a.id);
    return installedIds.includes(app.id);
  });

  const handleInstall = () => {
    const installedApps = getInstalledApps();
    const updatedApps = [...installedApps, app];
    saveInstalledApps(updatedApps);
    setIsInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-64 object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              {app.title}{" "}
              <span className="text-lg font-normal text-gray-500">
                — {app.shortDescription}
              </span>
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Developed by {app.companyName}
            </p>
          </div>

          <div className="stats shadow w-full">
            <div className="stat">
              <div className="stat-figure text-primary">
                <FiDownload size={24} />
              </div>
              <div className="stat-title">Downloads</div>
              <div className="stat-value text-primary">
                {formatNumber(app.downloads)}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <RiStarSFill size={24} />
              </div>
              <div className="stat-title">Average Rating</div>
              <div className="stat-value text-secondary">{app.ratingAvg}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <MdReviews size={24} />
              </div>
              <div className="stat-title">Reviews</div>
              <div className="stat-value text-secondary">
                {formatNumber(app.reviews)}
              </div>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`btn w-fit px-8 ${
              isInstalled
                ? "btn-disabled"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
          >
            {isInstalled ? "✓ Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="bg-base-200 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Ratings Breakdown</h2>
        <RatingChart app={app} />
      </div>

      <div className="bg-base-200 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">About {app.title}</h2>
        <p className="text-base leading-relaxed text-gray-600">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
