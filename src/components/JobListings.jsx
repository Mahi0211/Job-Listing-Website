import { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import JobListingCard from "./JobListingCard";
import Loading from "../components/Loading";

// eslint-disable-next-line react/prop-types
const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeScheduleFilters, setActiveScheduleFilters] = useState([]);
  const [activeTypeFilters, setActiveTypeFilters] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "https://job-listing-website-production.up.railway.app/api/jobs?limit=3"
        : "https://job-listing-website-production.up.railway.app/api/jobs";
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);

  const handleScheduleFilterChange = (filters) => {
    setActiveScheduleFilters(filters);
  };

  const handleTypeFilterChange = (filters) => {
    setActiveTypeFilters(filters);
  };

  const filteredJobs = jobs.filter((job) => {
    const scheduleMatch = activeScheduleFilters.length
      ? activeScheduleFilters.includes(job.type)
      : true;
    const typeMatch = activeTypeFilters.length
      ? activeTypeFilters.includes(job.etype)
      : true;
    return scheduleMatch && typeMatch;
  });

  return (
    <section className="px-4 py-10">
      <div className="flex flex-col gap-10 lg:flex-row">
        {!isHome ? (
          <FilterCard
            activeScheduleFilters={activeScheduleFilters}
            onScheduleFilterChange={handleScheduleFilterChange}
            activeTypeFilters={activeTypeFilters}
            onTypeFilterChange={handleTypeFilterChange}
          />
        ) : (
          <div></div>
        )}
        <div className="w-full m-auto lg:w-3/4">
          {!isHome ? (
            <h2 className="mb-6 text-3xl font-bold text-black lg:text-5xl font-brandonGrotesqueBold">
              {isHome ? "Recent jobs" : "Browse jobs"}
            </h2>
          ) : (
            <h2 className="mb-6 text-3xl font-bold text-center text-black lg:text-5xl font-brandonGrotesqueBold">
              {isHome ? "Recent jobs" : "Browse jobs"}
            </h2>
          )}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <Loading loading={loading} />
            ) : (
              <>
                {filteredJobs.map((job, index) => (
                  <JobListingCard key={job.id} job={job} index={index} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
