import { PlayIcon } from "@heroicons/react/24/outline";

const FilterCard = () => {
  const schedule = [
    { label: "Full time" },
    { label: "Part time" },
    { label: "Internship" },
    { label: "Remote" },
    { label: "Freelance" },
  ];

  const type = [
    { label: "Full day" },
    { label: "Flexible schedule" },
    { label: "Shift work" },
    { label: "Distant work" },
  ];

  return (
    <div className="flex flex-col w-[25%] border-r-2 border-[#d8dbe9] max-lg:hidden">
      <div className="p-5">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-brandonGrotesqueBold">
            Filters
          </h1>
          <button className="flex items-center">
            <PlayIcon className="w-4 h-4 fill-black rotate-180" />
          </button>
        </div>
        <p className="font-brandonGrotesqueBold text-base text-[#727986] p-1">
          Working schedule
        </p>
        {schedule.map((item, index) => (
          <div className="flex items-center p-1" key={index}>
            <input
              id={`checkbox${index}`}
              type="checkbox"
              value={item.value}
              className="w-4 h-4 text-[#0B1623] bg-gray-100 border-gray-300 rounded focus:ring-[#0B1623] focus:ring-2"
            />
            <label
              htmlFor={`checkbox${index}`}
              className="ms-4 text-base text-black font-brandonGrotesqueBold"
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
          <div className="flex items-center p-1" key={index}>
            <input
              id={`checkbox${index}`}
              type="checkbox"
              value={item.value}
              className="w-4 h-4 text-[#0B1623] bg-gray-100 border-gray-300 rounded focus:ring-[#0B1623] focus:ring-2"
            />
            <label
              htmlFor={`checkbox${index}`}
              className="ms-4 text-base text-black font-brandonGrotesqueBold"
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
