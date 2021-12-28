/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-20 08:04:30
 * @LastEditTime: 2021-12-27 08:22:35
 * @FilePath: /pool/sequlizeDemo/migrations/20211220000430-create-todo.js
 * @Description: 
 */
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      deadline: {
        type: Sequelize.DATE
      },
      content: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Todos');
  }
};