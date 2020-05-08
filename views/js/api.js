const ENDPOINT = "/api/users/";

class Api {
  static async fetchAllUsers() {
    const response = await fetch(ENDPOINT);

    const result = await response.json();

    allUsers = result;

    return result;
  }

  static async uploadUsers(users) {
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(users),
      });

      await response.text();
    } catch (err) {
      console.log(err);

      alert("Please, check the input params");
    }
  }

  static async editUsers(id, users) {
    try {
      const response = await fetch(`${ENDPOINT}${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(users),
      });

      await response.text();
    } catch (err) {
      console.log(err);

      alert("Please, check the input params");
    }
  }

  static async deleteUsers(id) {
    const response = await fetch(`${ENDPOINT}${id}`, {
      method: "DELETE",
    });

    await response.text();
  }
}
