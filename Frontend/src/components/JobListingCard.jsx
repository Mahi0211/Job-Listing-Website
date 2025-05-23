/* eslint-disable react/prop-types */
import { useState } from "react";
import { BookmarkIcon, MapPinIcon } from "@heroicons/react/24/outline";
// import jobs from "../../../Backend/data/jobs.json";
import { Link } from "react-router-dom";

const tagColorsMap = {
  "Developer Junior": "bg-blue-50",
  "Developer Senior": "bg-blue-100",
  "Designer Junior": "bg-green-50",
  "Designer Senior": "bg-green-100",
};
const JobListingCard = ({ job, index }) => {
  const colorClass =
    job.tag && tagColorsMap[job.tag] ? tagColorsMap[job.tag] : "bg-slate-200";
  const [bookmarkStatus, setBookmarkStatus] = useState(() =>
    Array(job.length).fill(false)
  );

  const handleBookmarkClick = (index) => {
    const newBookmarkStatus = [...bookmarkStatus];
    newBookmarkStatus[index] = !newBookmarkStatus[index];
    setBookmarkStatus(newBookmarkStatus);
  };
  return (
    <div
      key={index}
      className="bg-white rounded-xl relative border border-[#a5aab8]"
    >
      <div className="flex flex-col justify-between p-2">
        <div
          className={`${colorClass} h-72 rounded-lg flex flex-col justify-between p-4`}
        >
          <div className="flex justify-between">
            <div className="inline-block p-2 text-sm bg-white rounded-full shadow font-brandonGrotesqueBold">
              {job.date}
            </div>
            <button
              className="p-2 bg-white rounded-full"
              onClick={() => handleBookmarkClick(index)}
            >
              <BookmarkIcon
                className={`h-5 w-5 text-black ${
                  bookmarkStatus[index] ? "fill-[#0B1623]" : "fill-white"
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="font-brandonGrotesqueBold text-[#3e4755] mb-1">
                {job.company.name}
              </div>
              <div className="text-2xl font-brandonGrotesqueBold">
                {job.title}
              </div>
            </div>
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-2 bg-white rounded-full shadow-md">
              <img
                src="https://vectorified.com/images/company-icon-png-5.png"
                alt="company-temp"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {job.tags.map((tag, index) => (
              <div
                key={index}
                className="px-2 py-[2px] rounded-full border border-[#a5aab8] font-brandonGrotesqueBold"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between px-3 py-2">
          <div>
            <h1 className="text-lg font-brandonGrotesqueBold">{job.salary}</h1>
            <div className="font-brandonGrotesqueBold text-base text-[#3e4755] flex gap-2 mt-2">
              <MapPinIcon className="inline w-5 h-5" />
              {job.location}
            </div>
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="bg-[#0B1623] text-white py-1 px-3 rounded-2xl font-brandonGrotesqueBold"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListingCard;
