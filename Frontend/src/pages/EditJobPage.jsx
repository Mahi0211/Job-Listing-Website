import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const EditJobPage = ({ updateJobSubmit }) => {
  const { id } = useParams();
  const job = useLoaderData();
  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [etype, setEtype] = useState(job.etype);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [skill, setSkill] = useState(job.skill);
  const [tags, setTags] = useState(job.tags || []);
  const [minSalary, setMinSalary] = useState(job.minSalary);
  const [maxSalary, setMaxSalary] = useState(job.maxSalary);
  const [customMinSalary, setCustomMinSalary] = useState(job.customMinSalary);
  const [customMaxSalary, setCustomMaxSalary] = useState(job.customMaxSalary);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);
  const [date, setDate] = useState(job.date);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter" && skill) {
      e.preventDefault();
      setTags([...tags, skill]);
      setSkill("");
    }
  };

  const removeSkill = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const submitForm = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    // setDate(currentDate);

    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = currentDate.toLocaleString("default", { month: "short" });
    const year = currentDate.getFullYear();
    const formattedDate = `${day} ${month}, ${year}`;

    setDate(formattedDate);

    // console.log(formattedDate);

    const updateJob = {
      id,
      title,
      type,
      etype,
      location,
      description,
      tags,
      salary,
      date: formattedDate,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    // console.log(newJob);
    console.log(date);
    updateJobSubmit(updateJob);

    toast.success("Job Updated Successfully");

    return navigate(`/jobs/${id}`);
  };

  useEffect(() => {
    // Only format the salary if at least one of the fields is filled
    if (minSalary || maxSalary || customMinSalary || customMaxSalary) {
      const formattedSalary = `₹${customMinSalary || minSalary}k - ₹${
        customMaxSalary || maxSalary
      }k`;
      setSalary(formattedSalary);

      // Validate salary range
      if (
        parseFloat(minSalary || customMinSalary) >=
        parseFloat(maxSalary || customMaxSalary)
      ) {
        setError("Minimum salary must be less than maximum salary");
        setSalary("");
      } else {
        setError("");
      }
    } else {
      // If all fields are empty, keep the current salary
      setSalary(job.salary);
    }
  }, [minSalary, maxSalary, customMinSalary, customMaxSalary, job.salary]);

  const handleMinSalaryChange = (e) => {
    const value = e.target.value;
    setMinSalary(value);
    setCustomMinSalary("");
  };

  const handleMaxSalaryChange = (e) => {
    const value = e.target.value;
    setMaxSalary(value);
    setCustomMaxSalary("");
  };

  const handleCustomMinSalaryChange = (e) => {
    const value = e.target.value;
    setCustomMinSalary(value);
    setMinSalary("");
  };

  const handleCustomMaxSalaryChange = (e) => {
    const value = e.target.value;
    setCustomMaxSalary(value);
    setMaxSalary("");
  };

  return (
    <section className="bg-indigo-50">
      <div className="container max-w-2xl py-24 m-auto max-md:py-10 max-sm:py-5">
        <div className="px-6 py-8 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="mb-6 text-3xl max-sm:text-2xl text-center font-josefinSansBold">
              Update Job
            </h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block mb-2 text-xl max-sm:text-lg text-gray-700 font-brandonGrotesqueBold"
              >
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="w-full px-3 py-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block mb-2 text-xl max-sm:text-lg text-gray-700 font-brandonGrotesqueBold"
              >
                Employment Type
              </label>
              <select
                id="etype"
                name="etype"
                className="w-full px-3 py-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                required
                value={etype}
                onChange={(e) => setEtype(e.target.value)}
              >
                <option value="Full-Day">Full-Day</option>
                <option value="Flexible-Schedule">Flexible-Schedule</option>
                <option value="Shift-Work">Shift-Work</option>
                <option value="Distant-Work">Distant-Work</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-xl max-sm:text-lg text-gray-700 font-brandonGrotesqueBold">
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full px-3 py-2 mb-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block mb-2 text-xl max-sm:text-lg text-gray-700 font-brandonGrotesqueBold"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full px-3 py-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label className="block mb-2 text-xl max-sm:text-lg text-gray-700 font-brandonGrotesqueBold">
                Tags
              </label>
              <input
                type="text"
                id="skill"
                name="skill"
                className="w-full px-3 py-2 mb-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                placeholder="eg. JavaScript, React, Node.js"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                onKeyDown={handleSkillKeyDown}
              />
            </div>

            <div className="mb-4">
              {/* <h3 className="text-lg font-brandonGrotesqueBold">tags Set</h3> */}
              <div className="flex flex-wrap">
                {tags.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center px-3 py-1 m-1 text-lg max-sm:text-sm text-gray-700 bg-gray-200 rounded font-brandonGrotesqueMedium"
                  >
                    {skill}
                    <button
                      className="ml-2 text-gray-500 hover:text-gray-700"
                      onClick={() => removeSkill(index)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex gap-3">
                <div className="mb-4">
                  <label
                    htmlFor="minSalary"
                    className="block mb-2 text-xl max-sm:text-lg text-center text-gray-700 font-brandonGrotesqueBold"
                  >
                    Min<span className="max-sm:hidden">imum</span> Salary
                  </label>
                  <div className="flex">
                    <select
                      id="minSalary"
                      name="minSalary"
                      className="w-full px-3 py-2 mr-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                      //   required
                      value={minSalary}
                      onChange={handleMinSalaryChange}
                    >
                      <option value="">Select</option>
                      <option value="0">₹0k</option>
                      <option value="10">₹10k</option>
                      <option value="20">₹20k</option>
                      <option value="30">₹30k</option>
                      <option value="40">₹40k</option>
                      <option value="50">₹50k</option>
                      <option value="60">₹60k</option>
                      <option value="70">₹70k</option>
                      <option value="80">₹80k</option>
                      <option value="90">₹90k</option>
                      <option value="100">₹100k</option>
                      {/* Add other options up to 100k */}
                    </select>
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                      placeholder="Enter amount"
                      value={customMinSalary}
                      onChange={handleCustomMinSalaryChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="maxSalary"
                    className="block mb-2 text-xl max-sm:text-lg text-center text-gray-700 font-brandonGrotesqueBold"
                  >
                    Max<span className="max-sm:hidden">imum</span> Salary
                  </label>
                  <div className="flex">
                    <select
                      id="maxSalary"
                      name="maxSalary"
                      className="w-full px-3 py-2 mr-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                      //   required
                      value={maxSalary}
                      onChange={handleMaxSalaryChange}
                    >
                      <option value="">Select</option>
                      <option value="0">₹0k</option>
                      <option value="10">₹10k</option>
                      <option value="20">₹20k</option>
                      <option value="30">₹30k</option>
                      <option value="40">₹40k</option>
                      <option value="50">₹50k</option>
                      <option value="60">₹60k</option>
                      <option value="70">₹70k</option>
                      <option value="80">₹80k</option>
                      <option value="90">₹90k</option>
                      <option value="100">₹100k</option>
                      {/* Add other options up to 200k */}
                    </select>
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                      placeholder="Enter amount"
                      value={customMaxSalary}
                      onChange={handleCustomMaxSalaryChange}
                    />
                  </div>
                </div>
              </div>

              {error && (
                <div className="mb-4 text-red-600 font-brandonGrotesqueBold">
                  {error}
                </div>
              )}

              <div className="flex items-center gap-10">
                <label
                  htmlFor="salary"
                  className="block m-2 text-xl max-sm:text-base text-gray-700 font-brandonGrotesqueBold"
                >
                  Selected Salary Range:
                </label>
                <p className="text-lg max-sm:text-base">{job.salary}</p>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-xl max-sm:text-lg text-gray-700 font-brandonGrotesqueBold">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full px-3 py-2 mb-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                placeholder="Company Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className="mt-10 mb-5 text-2xl max-sm:text-xl text-center font-josefinSansBold">
              Company Info
            </h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block mb-2 text-xl max-sm:text-lg text-gray-700 font-brandonGrotesqueBold"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-3 py-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block mb-2 text-xl max-sm:text-lg text-gray-700 font-brandonGrotesqueBold"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="w-full px-3 py-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block mb-2 text-xl max-sm:text-lg text-gray-700 font-brandonGrotesqueBold"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="w-full px-3 py-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block mb-2 text-xl max-sm:text-lg text-gray-700 font-brandonGrotesqueBold"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="w-full px-3 py-2 text-lg max-sm:text-base border rounded font-brandonGrotesqueMedium"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="w-full mt-2 px-4 py-2 text-xl max-sm:text-lg text-white bg-indigo-500 rounded-full hover:bg-indigo-600 font-brandonGrotesqueBold focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;
