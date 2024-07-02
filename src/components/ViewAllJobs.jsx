import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className="max-w-lg w-full px-6 m-auto my-10">
      <Link
        to="/jobs"
        className="block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700 font-brandonGrotesqueBold"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
