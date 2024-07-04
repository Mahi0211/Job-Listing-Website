// import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
// import Loading from "../components/Loading";

const JobPage = () => {
  //   const { id } = useParams();
  const job = useLoaderData();
  //   const [job, setJob] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchJob = async () => {
  //       try {
  //         const res = await fetch(`/api/jobs/${id}`);
  //         const data = await res.json();
  //         setJob(data);
  //       } catch (error) {
  //         console.log("Error fetching data", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchJob();
  //   }, [id]);

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center font-brandonGrotesqueMedium"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-60/40 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4 font-brandonGrotesqueMedium">
                  {job.type}
                </div>
                <h1 className="text-[35px] leading-10 mb-4 font-josefinSansBold text-[#0B1623]">
                  {job.title}
                </h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                  <p className="text-orange-700 font-brandonGrotesqueMedium">
                    {job.location}
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 mb-4 font-josefinSansBold text-[20px]">
                  Job Description
                </h3>

                <p className="mb-6 font-brandonGrotesqueMedium text-[18px] max-sm:text-[16px]">
                  {job.description}
                </p>

                <h3 className="text-indigo-800 font-josefinSansBold text-[20px] mb-4">
                  Required Skills
                </h3>
                <div className="flex gap-3 mb-6 font-brandonGrotesqueMedium flex-wrap text-[18px] max-sm:text-[16px]">
                  {job.tags.map((skill) => {
                    return <div key={job.id}>{skill} ,</div>;
                  })}
                </div>

                <h3 className="text-indigo-800 font-josefinSansBold text-[20px] mb-4">
                  Salary
                </h3>

                <p className="mb-6 font-brandonGrotesqueMedium text-[18px] max-sm:text-[16px]">
                  {job.salary} / Month
                </p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-3xl mb-6 font-josefinSansBold text-[#0B1623]">{job.company.name}</h2>
                <h3 className="text-xl mb-4 font-brandonGrotesqueBold">Company Info</h3>

                <p className="my-2 font-brandonGrotesqueMedium text-[18px] max-sm:text-[16px]">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl font-brandonGrotesqueMedium">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-brandonGrotesqueBold text-[18px] max-sm:text-[16px] text-[#0B1623]">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl font-brandonGrotesqueMedium">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-brandonGrotesqueBold text-[18px] max-sm:text-[16px] text-[#0B1623]">
                  {job.company.contactPhone}
                </p>
              </div>

              {/* <!-- Manage --> */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl mb-6 font-brandonGrotesqueBold">Manage Job</h3>
                <Link
                  to="/add-job.html"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-brandonGrotesqueBold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button className="bg-red-500 hover:bg-red-600 text-white font-brandonGrotesqueBold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
