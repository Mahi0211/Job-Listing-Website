import { useState } from "react";

const AddJobPage = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [etype, setEtype] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [salary, setSalary] = useState("Under $50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter" && skill) {
      e.preventDefault();
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  const removeSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24 max-md:py-10 max-sm:py-5">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form>
            <h2 className="text-3xl text-center font-josefinSansBold mb-6">
              Add Job
            </h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-brandonGrotesqueBold text-xl mb-2"
              >
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3 font-brandonGrotesqueMedium text-lg"
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
                className="block text-gray-700 font-brandonGrotesqueBold text-xl mb-2"
              >
                Employment Type
              </label>
              <select
                id="etype"
                name="etype"
                className="border rounded w-full py-2 px-3 font-brandonGrotesqueMedium text-lg"
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
              <label className="block text-gray-700 font-brandonGrotesqueBold text-xl mb-2">
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2 font-brandonGrotesqueMedium text-lg"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-brandonGrotesqueBold text-xl mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3 font-brandonGrotesqueMedium text-lg"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-brandonGrotesqueBold text-xl mb-2">
                Skills
              </label>
              <input
                type="text"
                id="skill"
                name="skill"
                className="border rounded w-full py-2 px-3 mb-2 font-brandonGrotesqueMedium text-lg"
                placeholder="eg. JavaScript, React, Node.js"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                onKeyDown={handleSkillKeyDown}
              />
            </div>

            <div className="mb-4">
              {/* <h3 className="font-brandonGrotesqueBold text-lg">Skills Set</h3> */}
              <div className="flex flex-wrap">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-200 text-gray-700 font-brandonGrotesqueMedium text-lg px-3 py-1 m-1 rounded"
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
              <label
                htmlFor="type"
                className="block text-gray-700 font-brandonGrotesqueBold text-xl mb-2"
              >
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3 font-brandonGrotesqueMedium text-lg"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-brandonGrotesqueBold text-xl mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2 font-brandonGrotesqueMedium text-lg"
                placeholder="Company Location"
                required
              />
            </div>

            <h3 className="text-2xl mb-5 mt-10 font-josefinSansBold text-center">
              Company Info
            </h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-brandonGrotesqueBold text-xl mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3 font-brandonGrotesqueMedium text-lg"
                placeholder="Company Name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-brandonGrotesqueBold text-xl mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3 font-brandonGrotesqueMedium text-lg"
                rows="4"
                placeholder="What does your company do?"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-brandonGrotesqueBold text-xl mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3 font-brandonGrotesqueMedium text-lg"
                placeholder="Email address for applicants"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-brandonGrotesqueBold text-xl mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3 font-brandonGrotesqueMedium text-lg"
                placeholder="Optional phone for applicants"
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-brandonGrotesqueBold text-xl py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;