'use strict';

const categoriesSchema = require('./categories-schema.js');
const dataModel = require('./data-models.js');

/**
 *
 *
 * @class Categories
 * @extends {dataModel}
 */
class Categories extends dataModel {}

module.exports = new Categories(categoriesSchema);
