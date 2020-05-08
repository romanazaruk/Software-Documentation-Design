import express from "express";
import typedi from "typedi";
import TasksService from "../services/tasks.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
  try {
    const tasksService = Container.get(TasksService);

    const tasks = await tasksService.getAll();

    return res.json(tasks);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const tasksService = Container.get(TasksService);

    const tasks = req.body;

    await tasksService.create(tasks);

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const tasksService = Container.get(TasksService);

    const id = req.params.id;

    const updateValues = req.body;

    await tasksService.update(id, updateValues);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const tasksService = Container.get(TasksService);

    const tasksId = req.params.id;

    await tasksService.delete(tasksId);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

export default router;
