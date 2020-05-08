import express from "express";
import typedi from "typedi";
import ProjectsService from "../services/projects.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
  try {
    const projectsService = Container.get(ProjectsService);

    const projects = await projectsService.getAll();

    return res.json(projects);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const projectsService = Container.get(ProjectsService);

    const projects = req.body;

    await projectsService.create(projects);

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const projectsService = Container.get(ProjectsService);

    const id = req.params.id;

    const updateValues = req.body;

    await projectsService.update(id, updateValues);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const projectsService = Container.get(ProjectsService);

    const projectsId = req.params.id;

    await projectsService.delete(projectsId);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

export default router;
