// import { useState, useEffect } from "react";
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {toast} from "react-toastify"
// import Loading from "../components/Loading";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const job = useLoaderData();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );
    if (!confirm) return;
    deleteJob(jobId);

    toast.success("Job Deleted Successfully")

    navigate("/jobs")
  };

  return (
    <>
      <section>
        <div className="container px-6 py-6 m-auto">
          <Link
            to="/jobs"
            className="flex items-center text-indigo-500 hover:text-indigo-600 font-brandonGrotesqueMedium"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container px-6 py-10 m-auto">
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-60/40">
            <main>
              <div className="p-6 text-center bg-white rounded-lg shadow-md lg:text-left">
                <div className="mb-4 text-gray-500 font-brandonGrotesqueMedium">
                  {job.type}
                </div>
                <h1 className="text-[35px] leading-10 mb-4 font-josefinSansBold text-[#0B1623]">
                  {job.title}
                </h1>
                <div className="flex justify-center mb-4 text-gray-500 align-middle lg:justify-start">
                  <i className="mr-2 text-lg text-orange-700 fa-solid fa-location-dot"></i>
                  <p className="text-orange-700 font-brandonGrotesqueMedium">
                    {job.location}
                  </p>
                </div>
              </div>

              <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
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
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl mb-6 font-josefinSansBold text-[#0B1623]">
                  {job.company.name}
                </h2>
                <h3 className="mb-4 text-xl font-brandonGrotesqueBold">
                  Company Info
                </h3>

                <p className="my-2 font-brandonGrotesqueMedium text-[18px] max-sm:text-[16px]">
                  {job.company.description}
                </p>

                <hr className="my-4" />

                <h3 className="text-xl font-brandonGrotesqueMedium">
                  Contact Email:
                </h3>

                <p className="my-2 bg-indigo-100 p-2 font-brandonGrotesqueBold text-[18px] max-sm:text-[16px] text-[#0B1623]">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl font-brandonGrotesqueMedium">
                  Contact Phone:
                </h3>

                <p className="my-2 bg-indigo-100 p-2 font-brandonGrotesqueBold text-[18px] max-sm:text-[16px] text-[#0B1623]">
                  {job.company.contactPhone}
                </p>
              </div>

              {/* <!-- Manage --> */}
              <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-6 text-xl font-brandonGrotesqueBold">
                  Manage Job
                </h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="block w-full px-4 py-2 mt-4 text-center text-white bg-indigo-500 rounded-full hover:bg-indigo-600 font-brandonGrotesqueBold focus:outline-none focus:shadow-outline"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="block w-full px-4 py-2 mt-4 text-white bg-red-500 rounded-full hover:bg-red-600 font-brandonGrotesqueBold focus:outline-none focus:shadow-outline"
                >
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
