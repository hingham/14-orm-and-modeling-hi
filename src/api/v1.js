'use strict';

const express = require('express');
const modelFinder = require('../models/model-finder.js')
const router = express.Router();
const swaggerUI = require('swagger-ui-express');
router.param('model', modelFinder);


const swaggerDocs = require('../doc/swagger.json');
router.use('/api/v1/:model/:id', swaggerUI.server, swaggerUI.setup(swaggerDocs));

// ROUTES
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);

router.get('/api/v1/:model/:id', handelGetOne);
router.put('/api/v1/:model/:id', handlePut);
router.delete('/api/v1/:model/:id', handleDelete);



// FUNCTIONS
/**
 *
 * @description function that takes in req, res, next
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function handleGetAll(request,response,next) {
  console.log('in get');
  request.model.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

/**
 *
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function handelGetOne(request,response,next) {
  request.model.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

/**
 *
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function handlePost(request,response,next) {
  console.log('in post');

  request.model.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 *
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function handlePut(request,response,next) {
  request.model.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 *
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function handleDelete(request,response,next) {
  request.model.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = router;
