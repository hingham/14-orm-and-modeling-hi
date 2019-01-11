'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const categories = mongoose.Schema({
  category: { type:String, required:true },
  color: { type:String, required:true },
}, {toObject: {virtuals: true}, toJSON: {virtuals:true} });



categories.virtual('products', {
  ref: 'products',
  localField: 'color',
  foreignField: 'color',
  justOne: false
});


categories.pre('find', function(){
  try{
    this.populate('products');
  }
  catch(e) {console.log('find error', e); }
});


categories.pre('save', function(next) {
  if(this.category === 'veg'){
    console.log('in pre lopp');
    this.category = 'vegetable';  
  }
  next();
});

module.exports = mongoose.model('categories', categories);
