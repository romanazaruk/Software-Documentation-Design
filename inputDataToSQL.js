import FileService from "./services/file.service.js";
import UserService from "./services/users.service.js";


async function inputDataToSQL() {
  let result = await FileService.getUsers(1, 100);
  const users = result.map((line) => {
    const values = line.split(",");

    return {
      firstName: values[0],
      lastName: values[1],
      email: values[2],
      password: values[3],
      jobTitle: values[4],
    };
  });
  
  const userService = new UserService();
  for (const user of users) {
    userService.create(user)
    
  }
}
inputDataToSQL();
