import { readJobs, writeJobs } from "../helper/fileHelper.js";
import shortid from "shortid";

// @desc get all jobs
// @route GET /api/posts
export const getJobs = async (req, res, next) => {
  try {
    const jobs = await readJobs();
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
      return res.status(200).json(jobs.slice(0, limit));
    }

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Error reading jobs file" });
    next(error);
  }
};

// @desc get single post
// @route GET /api/jobs/:id
export const getJob = async (req, res, next) => {
  try {
    const jobs = await readJobs();
    const id = req.params.id;
    const job = jobs.find((job) => job.id === id);

    if (!job) {
      const error = new Error(`A job with the id of ${id} was not found`);
      error.status = 404;
      return next(error);
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: "Error reading job file" });
  }
};

// @desc create a new job
// @route job /api/jobs
export const createJob = async (req, res, next) => {
  try {
    const jobs = await readJobs();

    // If no date is provided, use the current date
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = currentDate.toLocaleString("default", { month: "short" });
    const year = currentDate.getFullYear();
    const formattedDate = req.body.date || `${day} ${month}, ${year}`;

    const newjob = {
      id: shortid.generate(),
      title: req.body.title,
      type: req.body.type,
      etype: req.body.etype,
      location: req.body.location,
      description: req.body.description,
      tags: req.body.tags,
      salary: req.body.salary,
      date: formattedDate,
      company: {
        name: req.body.name,
        description: req.body.company.description,
        contactEmail: req.body.company.contactEmail,
        contactPhone: req.body.company.contactPhone,
      },
    };

    if (!newjob.title) {
      const error = new Error("Please include a title");
      error.status = 400;
      return next(error);
    }
    jobs.push(newjob);
    await writeJobs(jobs);

    res.status(201).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Error creating job file" });
  }
};

// @desc update job
// @route PUT /api/jobs/:id
export const updateJob = async (req, res, next) => {
  let jobs = await readJobs();
  const id = req.params.id;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    const error = new Error(`A job with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  // If no date is provided, use the current date
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = currentDate.toLocaleString("default", { month: "short" });
  const year = currentDate.getFullYear();
  const formattedDate = req.body.date || `${day} ${month}, ${year}`;

  job.title = req.body.title;
  job.type = req.body.type;
  job.etype = req.body.etype;
  job.location = req.body.location;
  job.description = req.body.description;
  job.tags = req.body.tags;
  job.salary = req.body.salary;
  job.date = formattedDate;
  job.company.name = req.body.company.name;
  job.company.description = req.body.company.description;
  job.company.contactEmail = req.body.company.contactEmail;
  job.company.contactPhone = req.body.company.contactPhone;

  await writeJobs(jobs);

  res.status(200).json(jobs);
};

// @desc delete job
// @route DELETE /api/jobs/:id
export const deleteJob = async (req, res, next) => {
  let jobs = await readJobs();
  const id = req.params.id;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    const error = new Error(`A job with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  jobs = jobs.filter((job) => job.id !== id);
  await writeJobs(jobs);

  res.status(200).json(jobs);
};
