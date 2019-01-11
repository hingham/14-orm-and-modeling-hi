'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const products = mongoose.Schema({
  name: { type:String, required:true },
  color: { type:String, required:true },
});



module.exports = mongoose.model('products', products);
