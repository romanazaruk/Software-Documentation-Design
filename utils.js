import fs from "fs";
import readline from "readline";

export const generateRandId = () => {
  return Math.floor(Math.random() * 10e6);
};

export const readLinesFromFile = (startLine, endLine) =>
  new Promise((resolve, reject) => {
    try {
      if (!endLine) {
        endLine = startLine;
        startLine = 0;
      }

      const users = [];

      const lineReader = readline.createInterface({
        input: fs.createReadStream("./files/file_data.csv"),
      });

      let i = 0;
      lineReader.on("line", (line) => {
        i++;

        if (i >= startLine) {
          users.push(line);
        }

        if (i >= endLine) {
          lineReader.removeAllListeners();
          lineReader.close();
          resolve(users);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
