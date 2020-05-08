import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const Projects = sequelize.define("projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
  date: { type: DataTypes.DATE },
});

export default Projects;
