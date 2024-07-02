import { PlayIcon } from "@heroicons/react/24/outline";

const FilterCard = () => {
  const schedule = [
    { label: "Full time", value: "full_time" },
    { label: "Part time", value: "part_time" },
    { label: "Internship", value: "internship" },
    { label: "Remote", value: "remote" },
    { label: "Freelance", value: "freelance" },
  ];

  const type = [
    { label: "Full day", value: "full_day" },
    { label: "Flexible schedule", value: "flexible_schedule" },
    { label: "Shift work", value: "shift_work" },
    { label: "Distant work", value: "distant_work" },
  ];

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
        {schedule.map((item, index) => (
          <div className="flex items-center p-1" key={`schedule-${index}`}>
            <input
              id={`schedule-checkbox-${index}`}
              type="checkbox"
              value={item.value}
              className="w-4 h-4 text-blue-700 bg-gray-100 border-gray-300 rounded focus:ring-blue-700 focus:ring-2 checked:bg-blue-700"
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
        {type.map((item, index) => (
          <div className="flex items-center p-1" key={`type-${index}`}>
            <input
              id={`type-checkbox-${index}`}
              type="checkbox"
              value={item.value}
              className="w-4 h-4 text-[#0B1623] bg-gray-100 border-gray-300 rounded focus:ring-blue-700 focus:ring-2 checked:bg-[#0B1623]"
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

