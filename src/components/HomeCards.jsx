import ArrowUpRightIcon from "@heroicons/react/20/solid/ArrowUpRightIcon";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="m-auto container-xl lg:container">
        <div className="grid grid-cols-1 gap-12 py-4 rounded-lg md:grid-cols-2 px-14">
          <Card>
            <div className="inline-block px-3 py-1 mb-4 bg-white rounded-full drop-shadow-md font-brandonGrotesqueBold">
              Browse
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-4xl font-noyhgeometricBold max-lg:text-3xl">
                For Candidates
              </h2>
              <Link to="#">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#0B1623] max-lg:w-10 max-lg:h-10">
                  <ArrowUpRightIcon className="w-6 h-6 fill-white max-lg:w-5 max-lg:h-5" />
                </div>
              </Link>
            </div>
            <p className="mt-2 mb-4 font-brandonGrotesqueBold text-lg text-[#3e4755] max-lg:text-base">
              Explore a diverse range of job listings and take the next step in
              your career journey
            </p>
          </Card>
          <Card bg="bg-[#C4DFDF]">
            <div className="inline-block px-3 py-1 mb-4 bg-white rounded-full drop-shadow-md font-brandonGrotesqueBold">
              Add
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-4xl font-noyhgeometricBold max-lg:text-3xl">
                For Employers
              </h2>
              <Link to="#">
                <div className="w-12 h-12 flex justify-center items-center rounded-full border-[1.7px] border-black max-lg:w-10 max-lg:h-10">
                  <ArrowUpRightIcon className="w-6 h-6 fill-[#0B1623] max-lg:w-5 max-lg:h-5" />
                </div>
              </Link>
            </div>
            <p className="mt-2 mb-4 font-brandonGrotesqueBold text-lg text-[#3e4755] max-lg:text-base">
              Streamline your recruitment process and find the perfect
              candidates for your organization
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
