'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Entries', 'content', {
      type: Sequelize.TEXT,
      allowNull: false
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Entries', 'content', {
      type: Sequelize.STRING
    })
  }
}
