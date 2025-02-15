import express from "express";
import jobs from "./routes/jobs.js";
import logger from "./middleware/logger.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/error.js";
import cors from "cors";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware
app.use(logger);

// Routes
app.use("/api/jobs", jobs);

// error handler middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
