import {DataTypes, Dialect, Sequelize} from "sequelize";
import dbConfig from "../configs/db.config";
import userModel from "./user.model";

export const sequelize = new Sequelize(
  dbConfig.DB_NAME,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT as Dialect
  }
)

const db: any = {};
db.sequelize = sequelize;
db.model = {};
db.model.User = userModel(sequelize, DataTypes);

export default db;