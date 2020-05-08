import express from "express";

import usersRoute from "./users.route.js";
import projectsRoute from "./projects.route.js";
import tasksRoute from "./tasks.route.js";

const router = express.Router();

router.use("/users", usersRoute);
router.use("/projects", projectsRoute);
router.use("/tasks", tasksRoute);

export default router;
