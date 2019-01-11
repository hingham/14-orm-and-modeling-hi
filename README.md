
#### Links
Repo: https://github.com/hingham/13-rest-server-hi

![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Project Name: LAB 14 Data Modeling and API server

### Author: Hannah Ingham

### Links and Resources
* [repo]https://github.com/hingham/14-orm-and-modeling-hi/pull/1
* [travis][![Build Status](https://www.travis-ci.com/hingham/14-orm-and-modeling.svg?branch=master)](https://www.travis-ci.com/hingham/14-orm-and-modeling)
* Travis link: https://www.travis-ci.com/hingham/14-orm-and-modeling
* [back-end]https://dashboard.heroku.com/apps/api-hannah/resources

#### Documentation
* [swagger](http://xyz.com) (API assignments only)
* [jsdoc](http://xyz.com) (All assignments)

### Modules
#### categories-schema.js
#### product-schema.js
#### data-model.js
#### products.js --extends dataModel
#### categories.js --extends dataModel

### Setup
#### `.env` requirements
* `PORT` - running on 3000
* `MONGODB_URI` - localhost:27017/products

#### Running the app
* `npm start`
* Endpoint:  `api/v1/products` 
  * Returns a JSON object with name, description, display, inside
* Endpoint: `api/v1/categories`
  * eturns a JSON object with name, description, display, and category inside

Commands for the command line: 
Post: echo '{
	"name" : "a",
	"color" : "b",
}' | http post :3000/api/v1/{route}

put: echo '{
	"category" : "a",
	"color" : "my put",
}' | http put :3000/api/v1/{route}/{id}

get: http :3000/api/v1/{route}/{id}

delete: http :3000/api/v1/{route}/{id}

Running Mongo:
* start mongodb path path/to/database
* start mongod in another window
* show dbs
* run: db.products.find().pretty(); to print all items in db

#### Tests
* How do you run tests? 
* * npm run tests
* What assertions were made?
* * Asserts that sanitize work correctly
* * Asserts that post, get, put and delete work correctly for /categories
* What assertions need to be / should be made?
* * Assertions need to be made for the /products route to check categories 

#### Links
Repo: https://github.com/hingham/13-rest-server-hi

[![Build Status](https://www.travis-ci.com/hingham/13-rest-server.svg?branch=master)](https://www.travis-ci.com/hingham/13-rest-server)

Travis link: https://www.travis-ci.com/hingham/13-rest-server

