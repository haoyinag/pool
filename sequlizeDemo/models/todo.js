/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-20 08:04:30
 * @LastEditTime: 2021-12-20 08:52:49
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
      deadline: {
        type: DataTypes.DATE,
        allowNull: false,
        get(){
          return "2021-12-20 08:00:00"
        }
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
