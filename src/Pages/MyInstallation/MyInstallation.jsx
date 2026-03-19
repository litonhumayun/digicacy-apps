import React, { useState } from "react";
import { toast } from "react-toastify";
import { FiDownload } from "react-icons/fi";
import { RiStarSFill } from "react-icons/ri";
import { MdStorage } from "react-icons/md";
import { getInstalledApps, saveInstalledApps } from "/utils/localStorage";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState(() => {
    return getInstalledApps();
  });

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    saveInstalledApps(updatedApps);
    setInstalledApps(updatedApps);
    toast.error("App uninstalled successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">My Installations</h1>

      {installedApps.length === 0 ? (
        <p className="text-center text-gray-500 py-20">
          No apps installed yet.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center gap-4 bg-base-200 rounded-2xl p-4"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-20 h-20 object-cover rounded-xl shrink-0"
              />

              <div className="flex flex-col gap-1 flex-1">
                <h2 className="font-bold text-lg">{app.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FiDownload />
                    {app.downloads.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-500">
                    <RiStarSFill />
                    {app.ratingAvg}
                  </span>
                  <span className="flex items-center gap-1">
                    <MdStorage />
                    {app.size} MB
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="btn btn-error btn-sm text-white shrink-0"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInstallation;
