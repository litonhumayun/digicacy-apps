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
      className="card bg-base-100 w-full shadow-md hover:shadow-xl transition duration-300"
    >
      <figure className="h-48 w-full overflow-hidden px-6 pt-6">
        <img
          src={appData.image}
          alt={appData.title}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg">
          {appData.title}:<span>{appData.shortDescription}</span>
        </h2>
        <div className="flex justify-between items-center w-full mt-2">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <FiDownload />
            <span>{appData.downloads}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-yellow-500">
            <FaStar />
            <span>{appData.ratingAvg}</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default AllAppsCard;
