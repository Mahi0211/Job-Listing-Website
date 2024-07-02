import { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import JobListingCard from "./JobListingCard";
import Loading from "../components/Loading";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "http://localhost:8000/jobs?_limit=3"
        : "http://localhost:8000/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetchin data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="px-4 py-10">
      <div className="flex gap-10">
        <FilterCard />
        <div className="m-auto container-xl lg:container">
          <h2 className="mb-6 text-5xl font-bold text-black font-brandonGrotesqueBold">
            {isHome ? "Recent jobs" : "Browse jobs"}
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
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
