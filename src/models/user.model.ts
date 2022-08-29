import { Sequelize } from "sequelize"

export default (sequelize: Sequelize, DataTypes: any) => {
  const model = sequelize.define('person_TEST', {
    person_id: {
      type: DataTypes.SMALLINT,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: DataTypes.STRING(20),
    last_name: DataTypes.STRING(20),
    eye_color: DataTypes.ENUM('BR', 'GR', 'BL'),
    birth_date: DataTypes.DATE,
    street: DataTypes.STRING(30),
    city: DataTypes.STRING(30),
    state: DataTypes.STRING(20),
    country: DataTypes.STRING(20),
    postal_code: DataTypes.STRING(20),
  }, {
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
  })
  return model;
}