'use strict';

const rootDir = process.cwd();
const categories = require(`../../../src/models/categories.js`);

const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Category Model', () => {
  it('can post() a new category', () => {
    let obj = {category:'John', color: 'yellow'};
    return categories.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  // it('can get() a category', () => {
  //   let obj = {category:'John', color: 'yellow'};
  //   return categories.post(obj)
  //     .then(record => {
  //       return categories.get(record._id)
  //         .then(product => {
  //           Object.keys(obj).forEach(key =>{
  //             expect(product[0][key]).toEqual(obj[key]);
  //           });
  //         });
  //     });
  // });

  // it('can put() a product', () => {
  //   let obj = {category:'John', color: 'yellow'};
  //   return categories.post(obj)
  //     .then(record => {
  //       record.id = 1;
  //       return categories.get(record._id)
  //         .then(product => {
  //           Object.keys(obj).forEach(key =>{
  //             expect(product[0][key]).toEqual(obj[key]);
  //           });
  //         });
  //     });
  // });

  // it('can delete() a product', () => {
  //   let obj = {category:'John', color: 'yellow'};
  //   return categories.post(obj)
  //     .then(record => {
  //       record.id = 1;
  //       return categories.get()
  //         .then(categories => {
  //           let bool = true;
  //           for(let i = 0; i< categories.length; i++){
  //             if(categories[i]===1){
  //               bool =false;
  //             }
  //             expect(bool).toBe(true);

  //           }
  //         });
  //     });
  // });

});
