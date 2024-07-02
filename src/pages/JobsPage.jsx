import Hero from "../components/Hero";
import JobListings from "../components/JobListings";

const JobsPage = () => {
  return (
    <section>
      <Hero />
      <JobListings isHome={false} />
    </section>
  );
};

export default JobsPage;
