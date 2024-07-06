import { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import JobListingCard from "./JobListingCard";
import Loading from "../components/Loading";

// eslint-disable-next-line react/prop-types
const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
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

  return (
    <section className="px-4 py-10">
      <div className="flex flex-col gap-10 lg:flex-row">
        <FilterCard />
        <div className="w-full m-auto lg:w-3/4">
          <h2 className="mb-6 text-3xl font-bold text-black lg:text-5xl font-brandonGrotesqueBold">
            {isHome ? "Recent jobs" : "Browse jobs"}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <Loading loading={loading} />
            ) : (
              <>
                {jobs.map((job, index) => (
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
