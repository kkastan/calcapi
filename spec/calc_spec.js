'use strict';

var request = require("request");
var calcapi = require('../server.js')
var base_url = "http://localhost:8080"

describe("CalcApi Server", function() {

  describe("GET /add/2/6", function() {
    let add2To3Url = base_url + "/add/2/6"

    it("returns status code 200", (done)=>{
      request.get(add2To3Url, (err, res, body)=>{
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    it("returns the correct response JSON", (done)=>{
      request.get(add2To3Url, (err, res, body)=>{
        var result = JSON.parse(body);
        expect(result.header.operation).toBe("ADD");
        expect(result.data.value).toBe(8);
        expect(result.data.category).toBe("Blue")
        done();
      });
    });
  }); // END describe GET /add/2/3

  describe("GET /subtract/11/3", (done)=>{
    let subtract3From11Url = base_url + "/subtract/11/3";

    it("returns status code 200", (done)=>{
      request.get(subtract3From11Url, (err, res, body)=>{
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    it("returns the correct response JSON", (done)=>{
      request.get(subtract3From11Url, (err, res, body)=>{
        var result = JSON.parse(body);
        expect(result.header.operation).toBe("SUBTRACT");
        expect(result.data.value).toBe(8);
        expect(result.data.category).toBe("Green")
        done();
      });
    });
  }); // END describe GET /subtract/11/3

}); // END describe CalcApi Services
