/* eslint-disable react/prop-types */
// import { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/outline";

const FilterCard = ({
  activeScheduleFilters,
  onScheduleFilterChange,
  activeTypeFilters,
  onTypeFilterChange,
}) => {
  const scheduleOptions = [
    { label: "Full-Time", value: "Full-Time" },
    { label: "Part-Time", value: "Part-Time" },
    { label: "Internship", value: "Internship" },
    { label: "Remote", value: "Remote" },
    { label: "Freelance", value: "Freelance" },
  ];

  const typeOptions = [
    { label: "Full-Day", value: "Full-Day" },
    { label: "Flexible-Schedule", value: "Flexible-Schedul" },
    { label: "Shift-Work", value: "Shift-Work" },
    { label: "Distant-Work", value: "Distant-Work" },
  ];

  const handleScheduleChange = (value) => {
    const newFilters = activeScheduleFilters.includes(value)
      ? activeScheduleFilters.filter((filter) => filter !== value)
      : [...activeScheduleFilters, value];
    onScheduleFilterChange(newFilters);
  };

  const handleTypeChange = (value) => {
    const newFilters = activeTypeFilters.includes(value)
      ? activeTypeFilters.filter((filter) => filter !== value)
      : [...activeTypeFilters, value];
    onTypeFilterChange(newFilters);
  };

  return (
    <div className="flex flex-col w-[20%] border-r-2 border-[#d8dbe9] max-lg:hidden">
      <div className="p-5">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-brandonGrotesqueBold">Filters</h1>
          <button className="flex items-center">
            <PlayIcon className="w-4 h-4 rotate-180 fill-black" />
          </button>
        </div>
        <p className="font-brandonGrotesqueBold text-base text-[#727986] p-1">
          Working schedule
        </p>
        {scheduleOptions.map((item, index) => (
          <div className="flex items-center p-1" key={`schedule-${index}`}>
            <input
              id={`schedule-checkbox-${index}`}
              type="checkbox"
              value={item.value}
              className="w-4 h-4 text-blue-700 bg-gray-100 border-gray-300 rounded focus:ring-blue-700 focus:ring-2 checked:bg-blue-700"
              onChange={() => handleScheduleChange(item.value)}
              checked={activeScheduleFilters.includes(item.value)}
            />
            <label
              htmlFor={`schedule-checkbox-${index}`}
              className="text-base text-black ms-4 font-brandonGrotesqueBold"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
      <div className="p-5">
        <p className="font-brandonGrotesqueBold text-base text-[#727986] p-1">
          Employment type
        </p>
        {typeOptions.map((item, index) => (
          <div className="flex items-center p-1" key={`type-${index}`}>
            <input
              id={`type-checkbox-${index}`}
              type="checkbox"
              value={item.value}
              className="w-4 h-4 text-[#0B1623] bg-gray-100 border-gray-300 rounded focus:ring-blue-700 focus:ring-2 checked:bg-[#0B1623]"
              onChange={() => handleTypeChange(item.value)}
              checked={activeTypeFilters.includes(item.value)}
            />
            <label
              htmlFor={`type-checkbox-${index}`}
              className="text-base text-black ms-4 font-brandonGrotesqueBold"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCard;
