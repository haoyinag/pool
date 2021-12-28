/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-20 08:04:30
 * @LastEditTime: 2021-12-28 08:26:28
 * @FilePath: /pool/sequlizeDemo/models/todo.js
 * @Description:
 */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.STRING,
      status: DataTypes.INTEGER,
      deadline: {
        type: DataTypes.DATE,
        allowNull: false, 
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Todo",
    }
  );
  return Todo;
};
