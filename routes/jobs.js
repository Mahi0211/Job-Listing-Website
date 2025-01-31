import express from "express";
import {
  createJob,
  deleteJob,
  getJob,
  getJobs,
  updateJob,
} from "../controllers/jobControllers.js";

const router = express.Router();

// Get all posts - query limit
router.get("/", getJobs);

// Get single post
router.get("/:id", getJob);

// create new post
router.post("/", createJob);

// update a post
router.put("/:id", updateJob);

// delete a post
router.delete("/:id", deleteJob);

export default router;
