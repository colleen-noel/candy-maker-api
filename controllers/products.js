const models = require('../models')

const getAllProductsWithManufacturer = async (request, response) => {
  const productsWithManufacturer = await models.Products.findAll({
    include: [{ model: models.Manufacturers }]
  })
  return productsWithManufacturer
    ? response.send(productsWithManufacturer)
    : response.sendStatus(404)
}

const getProductbyNameWithManufacturer = async (request, response) => {
  const { name } = request.params

  const productById = await models.Products.findOne({
    attributes: ['id', 'name', 'yearIntroduced'],
    where: {
      name: { [models.Op.like]: `%${name}%` }
    },
    include: [{
      model: models.Manufacturers,
      attributes: ['id', 'name', 'country'],
    }]
  })
  return productById
    ? response.send(productById)
    : response.sendStatus(404)
}



module.exports = { getAllProductsWithManufacturer, getProductbyNameWithManufacturer }

