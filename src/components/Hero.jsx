import {
  MagnifyingGlassIcon,
  MapPinIcon,
  BriefcaseIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import RangeSlider from "./PriceRangeSlider";
import { useState } from "react";

const details = [
  {
    icon: <MagnifyingGlassIcon className="w-6 h-6 stroke-white" />,
    title: "Designer",
  },
  {
    icon: <MapPinIcon className="w-6 h-6 stroke-white" />,
    title: "Work location",
  },
  {
    icon: <BriefcaseIcon className="w-6 h-6 stroke-white" />,
    title: "Experience",
  },
];

const Hero = () => {
  const [sliderValue, setSliderValue] = useState([10000, 25000]);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <section className="bg-[#0b1623] mb-4">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl font-noyhgeometric-bold">
            Unlock Your Future
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-[#d8dbe9] font-noyhgeometric-regular">
            Start Navigating Your Career Path Now
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl lg:pb-4 sm:pb-2 max-lg:pb-2">
        <div className="bg-[#0b1623]">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-2">
            {details.map((detail, index) => (
              <div key={index} className="flex justify-center items-center">
                <button className="flex items-center justify-center gap-1">
                  <div className="w-9 h-9 rounded-full flex justify-center items-center">
                    {detail.icon}
                  </div>
                  <h1 className="text-white font-brandonGrotesqueRegular text-[20px] py-5 px-5 max-sm:p-2">
                    {detail.title}
                  </h1>
                  <PlayIcon className="w-4 h-4 rotate-90 fill-white" />
                </button>
              </div>
            ))}
            <div className="flex flex-col justify-center items-center gap-1">
              <div className="flex items-center justify-center gap-2">
                <h1
                  className="text-white 
                  font-brandonGrotesqueRegular text-[20px] py-5 pr-5 hidden sm:block"
                >
                  Salary range
                </h1>
                <div className="text-white font-brandonGrotesqueMedium text-[16px] py-5 pl-5 max-sm:py-2">
                  ${sliderValue[0]} - ${sliderValue[1]}
                </div>
              </div>
              <RangeSlider
                value={sliderValue}
                handleChange={handleSliderChange}
                minValue={0}
                maxValue={60000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
