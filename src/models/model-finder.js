'use strict';

//needs to result in new instance of a model

module.exports = (request, response, next )=>{
    console.log('in model');

  let modelName = request.params.model;
  console.log(modelName);
  request.model = require(`../models/${modelName}.js`);
  next();
}


