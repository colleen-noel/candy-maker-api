const models = require('../models')

const getAllManufacturersandProducts = async (request, response) => {
  const manufacturerAndProducts = await models.Manufacturers.findAll({
    include: [{ model: models.Products }]
  })
  return manufacturerAndProducts
    ? response.send(manufacturerAndProducts)
    : response.sendStatus(404)
}

const getManufacturersByNameWithProducts = async (request, response) => {
  const { name } = request.params

  const manufacturer = await models.Manufacturers.findOne({
    attributes: ['id', 'name', 'country'],
    where: {
      name: { [models.Op.like]: `%${name}%` }
    },
    include: [{
      model: models.Products,
      attributes: ['id', 'name', 'yearIntroduced']
    }]
  })
  return manufacturer
    ? response.send(manufacturer)
    : response.sendStatus(404)
}

module.exports = { getAllManufacturersandProducts, getManufacturersByNameWithProducts }
