// server.js

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data (replace this with your actual data)
const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Develop software solutions.",
  },
  {
    id: 2,
    title: "Data Analyst",
    description: "Analyze data to provide insights.",
  },
];

// Routes
app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

app.get("/api/jobs/:id", (req, res) => {
  const jobId = parseInt(req.params.id, 10);
  const job = jobs.find((job) => job.id === jobId);
  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ message: "Job not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
