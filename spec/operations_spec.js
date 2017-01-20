'use strict';

var operations = require('../app/services/operations.js');

describe("Operations Unit Tests: ", ()=>{

  describe("add two positive numbers", ()=>{
    it("returns the correct number", ()=>{
      let val = operations.add(3,7);
      expect(val.value).toBe(10);
      expect(val.category).toBe("Green");
    });
  });

  describe("categorize", ()=>{
    it("returns Green when their product is odd", ()=>{
      expect(operations.categorize(3,5)).toBe("Green");
    });
    it("returns Blue when their product is even", ()=>{
      expect(operations.categorize(2,4)).toBe("Blue");
    });
  })

});
