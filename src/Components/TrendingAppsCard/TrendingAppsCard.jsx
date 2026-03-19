import React from "react";
import { FaStar } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { useNavigate } from "react-router";

const TrendingAppsCard = ({ appData }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/apps/${appData.id}`);
    console.log(" button clicked");
    console.log(navigate);
  };
  return (
    <button
      onClick={handleClick}
      className="card bg-base-100 max-w-full max-h-full shadow-sm"
    >
      <figure className="h-48 w-full overflow-hidden">
        <img src={appData.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {appData.title}: {appData.shortDescription}
        </h2>

        <div className="card-actions justify-between">
          <div className="badge badge-outline">
            <FiDownload />
            {appData.downloads}
          </div>
          <div className="badge badge-outline">
            <FaStar />
            {appData.ratingAvg}
          </div>
        </div>
      </div>
    </button>
  );
};

export default TrendingAppsCard;
