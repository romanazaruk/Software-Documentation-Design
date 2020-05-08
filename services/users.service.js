import typedi from "typedi";
import UsersModel from "../models/users.js";
import { generateRandId } from "../utils.js";

export default class UsersService {


  static loadFileAndUploadToDB(firstIndex, lastIndex) {
    FileService.getUsers(firstIndex, lastIndex).then((users) => {
      const usersService = typedi.Container.get(Userservice);

      users.forEach((a) => {
        const users = usersService.fromCSVtoEntity(a);
        usersService.create(users);
      });
    });
  }

  async getAll() {
    const foundusers = await UsersModel.findAll({
      order: [["id", "DESC"]],
    });

    return foundusers;
  }

  async create(users) {
    const newUsers = {
      id: generateRandId(),
      ...users,
    };

    const usersRecord = await UsersModel.create(newUsers);

    return usersRecord;
  }

  async update(usersId, newValues) {
    const updatedUsers = await UsersModel.update(newValues, {
      where: { id:  usersId },
    });

    return updatedUsers;
  }

  async delete(usersId) {
    await UsersModel.destroy({
      where: { id: usersId },
    });
  }
}
