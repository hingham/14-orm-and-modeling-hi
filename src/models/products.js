'use strict';

const productsSchema = require('./products-schema.js');
const dataModel = require('./data-models.js');

/**
 *
 *
 * @class Products
 * @extends {dataModel}
 */
class Products extends dataModel {}

module.exports = new Products(productsSchema);
