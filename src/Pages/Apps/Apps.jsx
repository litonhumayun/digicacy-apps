import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AllAppsCard from "../../Components/AllAppsCard/AllAppsCard";
import NoAppsFound from "../../Components/NoAppsFound/NoAppsFound";

const Apps = () => {
  const appsData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <div className="px-6 pt-6 text-center">
        <h1 className="text-5xl font-bold my-4">Our All Applications</h1>
        <p className="text-3xl mb-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center px-6 pt-6 mb-4">
        <div className="font-bold">{filteredApps.length} Apps Found</div>
        <input
          type="text"
          placeholder="Search apps..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      {filteredApps.length === 0 ? (
        <NoAppsFound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredApps.map((appData) => (
            <AllAppsCard key={appData.id} appData={appData} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
