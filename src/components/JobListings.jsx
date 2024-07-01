import jobs from "../jobs.json";
import FilterCard from "./FilterCard";
import JobListingCard from "./JobListingCard";

const JobListings = () => {

  const recentJobs = jobs.slice(0,3);
  
  return (
    <section className="px-4 py-10">
      <div className="flex gap-10">
        <FilterCard />
        <div className="m-auto container-xl lg:container">
          <h2 className="mb-6 text-5xl font-bold text-black font-brandonGrotesqueBold">
            Recommended jobs
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
            {recentJobs.map((job, index) => (
              <JobListingCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
