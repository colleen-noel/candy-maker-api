const express = require('express')
const { getAllManufacturersandProducts, getManufacturersByNameWithProducts } = require('./controllers/manufacturers.js')
const { getAllProductsWithManufacturer, getProductbyNameWithManufacturer } = require('./controllers/products.js')

const app = express()

app.get('/manufacturers', getAllManufacturersandProducts)

app.get('/manufacturers/:name', getManufacturersByNameWithProducts)

app.get('/products', getAllProductsWithManufacturer)

app.get('/products/:name', getProductbyNameWithManufacturer)


app.listen(4004, () => {
  console.log('Listening on port 4004...')
})