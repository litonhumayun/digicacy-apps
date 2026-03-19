import React from "react";
import { useLoaderData } from "react-router";
import { FiDownload } from "react-icons/fi";
import { RiStarSFill } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import RatingChart from "../Components/RatingChart/RatingChart";

const AppDetails = () => {
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  const app = useLoaderData();

  return (
    <div className="flex flex-col">
      <div className="flex ">
        <div className="max-w-1/3">
          <img src={app.image} alt={app.title} />
        </div>
        <div className="max-w-2/3">
          <div>
            <h1>
              {app.title}: <span>{app.shortDescription}</span>
            </h1>
            <p>Developed By: {app.companyName}</p>
          </div>

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <FiDownload />
              </div>
              <div className="stat-title">Downloads</div>
              <div className="stat-value text-primary">
                {formatNumber(app.downloads)}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <RiStarSFill />
              </div>
              <div className="stat-title">Average Rating</div>
              <div className="stat-value text-secondary">{app.ratingAvg}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <MdReviews />
              </div>
              <div className="stat-title">Reviews</div>
              <div className="stat-value text-secondary">
                {formatNumber(app.reviews)}
              </div>
            </div>
          </div>

          <div>
            <button className="btn bg-green-500">
              Install Now ({app.size} MB)
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1>Ratings</h1>
        <RatingChart app={app}></RatingChart>
      </div>

      <div>
        <h3>{app.description}</h3>
      </div>
    </div>
  );
};

export default AppDetails;
