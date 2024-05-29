import jobs from "../jobs.json";
import FilterCard from "./FilterCard";
import JobListingCard from "./JobListingCard";

const JobListings = () => {
  return (
    <section className="px-4 py-10">
      <div className="flex gap-10">
        <FilterCard />
        <div className="container-xl lg:container m-auto">
          <h2 className="text-5xl font-bold text-black mb-6 font-brandonGrotesqueBold">
            Recommended jobs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <JobListingCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
