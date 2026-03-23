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
  const handleDescending = () => {
    const highToLow = [...installedApps].sort((a, b) => b.size - a.size);
    setInstalledApps(highToLow);
  };

  const handleAscending = () => {
    const lowToHigh = [...installedApps].sort((a, b) => a.size - b.size);
    setInstalledApps(lowToHigh);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">My Installations</h1>
      <div className="flex justify-between">
        <div className="">
          <h2>{installedApps.length} Apps Installed</h2>
        </div>
        <details className="dropdown">
          <summary className="btn m-1">Sort By Size</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <button onClick={handleDescending}>High-Low</button>
            </li>
            <li>
              <button onClick={handleAscending}>Low-High</button>
            </li>
          </ul>
        </details>
      </div>

      {installedApps.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No apps installed yet.
        </p>
      ) : (
        <div className="flex flex-col gap-4 max-w-full">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center gap-4 bg-green-100 rounded-2xl p-4"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-20 h-20 object-cover rounded-xl shrink-0"
              />

              <div className="flex flex-col gap-1 flex-1">
                <h2 className="font-bold text-lg">{app.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1 text-green-800">
                    <FiDownload />
                    {app.downloads.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-800">
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
