import React from "react";
import { FaStar } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { useNavigate } from "react-router";

const AllAppsCard = ({ appData }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/apps/${appData.id}`);
    console.log("button clicked");
    console.log(navigate);
  };
  return (
    <button
      onClick={handleClick}
      className="card bg-base-300 max-w-full max-h-full shadow-sm p-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-300"
    >
      <figure className="h-48 w-full overflow-hidden">
        <img src={appData.image} alt="Shoes" />
      </figure>
      <div className="">
        <h2 className="card-title mb-2">
          {appData.title}: {appData.shortDescription}
        </h2>

        <div className="card-actions justify-between">
          <div className="badge bg-green-100 text-green-600 px-3">
            <FiDownload className="" />
            {appData.downloads}
          </div>
          <div className="badge bg-purple-200 text-purple-600 px-3">
            <FaStar className="" />
            {appData.ratingAvg}
          </div>
        </div>
      </div>
    </button>
  );
};

export default AllAppsCard;
