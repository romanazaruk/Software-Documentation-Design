import TasksModel from "../models/tasks.js";
import { generateRandId } from "../utils.js";

export default class TasksService {
  async getAll() {
    const foundTasks = await TasksModel.findAll({
      order: [["id", "DESC"]],
    });

    return foundTasks;
  }

  async create(tasks) {
    const newTasks = {
      id: generateRandId(),
      ...tasks,
    };

    const tasksRecord = await TasksModel.create(newTasks);

    return tasksRecord;
  }

  async update(tasksId, newValues) {
    const updatedTasks = await TasksModel.update(newValues, {
      where: { id: tasksId },
    });

    return updatedtasks;
  }

  async delete(tasksId) {
    await TasksModel.destroy({
      where: { id: tasksId },
    });
  }
}
