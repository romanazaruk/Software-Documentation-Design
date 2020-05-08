import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const Users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  jobTitle: { type: DataTypes.STRING },
  projectID: { type: DataTypes.INTEGER }
});

export default Users;
