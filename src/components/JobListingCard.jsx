/* eslint-disable react/prop-types */
import { useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import jobs from "../jobs.json";

const JobListingCard = ({ job, index }) => {
  const tagColorsMap = {
    "Developer Junior": "#bae2ff",
    "Developer Senior": "#dff3fe",
    "UI/UX Designer Junior": "#a0dab6",
    "UI/UX Designer Senior": "#d5f6ed",
    "Graphic Designer Junior": "#e2dbfa",
    "Graphic Designer Senior": "#fbe2f5",
  };

  const color = job.tag && tagColorsMap[job.tag] ? tagColorsMap[job.tag] : null;
  console.log("job.tag:", job.tag);
  console.log("color:", color);
  // Initialize bookmark states for each job listing
  const [bookmarkStatus, setBookmarkStatus] = useState(() =>
    Array(jobs.length).fill(false)
  );

  const handleBookmarkClick = (index) => {
    const newBookmarkStatus = [...bookmarkStatus]; // Create a copy of bookmark status array
    newBookmarkStatus[index] = !newBookmarkStatus[index]; // Toggle bookmark status for the clicked job listing
    setBookmarkStatus(newBookmarkStatus); // Update the bookmark status state
  };
  return (
    <div
      key={index}
      className="bg-white rounded-xl relative border border-[#a5aab8]"
    >
      <div className="">
        <div className="p-2 flex flex-col justify-between">
          <div
            className={`${
              color ? `bg-[${color}]` : "bg-slate-200"
            } h-72 rounded-lg flex flex-col justify-between p-4`}
          >
            {console.log(
              "Class name:",
              `${
                color ? `bg-[${color}]` : "bg-slate-400"
              } h-72 rounded-lg flex flex-col justify-between p-4`
            )}
            <div className="flex justify-between">
              <div className="font-brandonGrotesqueBold text-sm inline-block bg-white shadow rounded-full p-2">
                {job.date}
              </div>
              <button
                className="bg-white p-2 rounded-full"
                onClick={() => handleBookmarkClick(index)} // Pass index to identify the specific job listing
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
                <div className="font-brandonGrotesqueBold text-2xl">
                  {job.title}
                </div>
              </div>
              <div className="flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-white p-2 shadow-md">
                <img
                  src="https://vectorified.com/images/company-icon-png-5.png"
                  alt="company-temp"
                  className="w-full h-full object-contain"
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
          <div className="flex justify-between items-center py-2 px-3">
            <div>
              <h1 className="text-lg font-brandonGrotesqueBold">
                {job.salary}
              </h1>
              <p className="font-brandonGrotesqueBold text-base text-[#a5aab8]">
                {job.location}
              </p>
            </div>
            <a
              href={`/job/${job.id}`}
              className="bg-[#0B1623] text-white py-1 px-3 rounded-2xl font-brandonGrotesqueBold"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingCard;
