import express from "express";
import typedi from "typedi";
import UsersService from "../services/users.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
  try {
    const usersService = Container.get(UsersService);

    const users = await usersService.getAll();

    return res.json(users);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const usersService = Container.get(UsersService);

    const users = req.body;

    await usersService.create(users);

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const usersService = Container.get(UsersService);

    const id = req.params.id;

    const updateValues = req.body;

    await usersService.update(id, updateValues);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const usersService = Container.get(UsersService);

    const usersId = req.params.id;

    await usersService.delete(usersId);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

export default router;
