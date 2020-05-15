const products = (connection, Sequelize) => {
  return connection.define('products', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    yearIntroduced: { type: Sequelize.DATEONLY },
    manufacturerId: { type: Sequelize.INTEGER, references: { model: 'manufacturers', key: 'id' } },
  }, { paranoid: true })
}

module.exports = products

