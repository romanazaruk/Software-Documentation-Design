import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const Tasks = sequelize.define("tasks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
  projectID: { type: DataTypes.INTEGER }
});

export default Tasks;
