import React from "react";
import NoAppsImage from "..//..//assets/App-Error.png";
import { Link } from "react-router";

const NoAppsFound = () => {
  return (
    <section className="flex items-center w-full h-full p-16 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img src={NoAppsImage} alt="" />
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find any matching apps.
          </p>
          <p className="mt-4 mb-8 text-gray-400 dark:text-gray-600">
            But dont worry, you can find plenty of other apps on the following
            All Apps page.
          </p>
          <div className="flex justify-around">
            <button
              onClick={() => (window.location.href = "/apps")}
              className="px-8 py-3 font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
            >
              Show All Apps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoAppsFound;
