import ProjectsModel from "../models/projects.js";
import { generateRandId } from "../utils.js";

export default class ProjectsService {
  async getAll() {
    const foundProjects = await ProjectsModel.findAll({
      order: [["id", "DESC"]],
    });

    return foundProjects;
  }

  async create(projects) {
    const newProjects = {
      id: generateRandId(),
      ...projects,
    };

    const projectsRecord = await ProjectsModel.create(newProjects);

    return projectsRecord;
  }

  async update(projectsId, newValues) {
    const updatedProjects = await ProjectsModel.update(newValues, {
      where: { id: projectsId },
    });

    return updatedProjects;
  }

  async delete(projectsId) {
    await ProjectsModel.destroy({
      where: { id: projectsId },
    });
  }
}
