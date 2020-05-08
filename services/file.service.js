import { readLinesFromFile } from "../utils.js";

export default class FileService {
  static async getUsers(firstIndex, lastIndex) {
    return readLinesFromFile(firstIndex, lastIndex);
  }

  static async printUsers(firstIndex, lastIndex) {
    console.log(`Users:`);
    console.log(await FileService.getUsers(firstIndex, lastIndex));
  }
}
