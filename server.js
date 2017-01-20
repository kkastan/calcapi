'use strict';

var restify = require('restify');
var addSvc  = require('./app/controllers/add');

var server = restify.createServer({
  name: "CalcApi",
});

// listen for uncaught excaptions and log as errors.
server.on('uncaughtException', function(req, resp, route, err) {
  console.log("ERROR", err);
  resp.send(500, {
    message: "Internal Server Error"
  });
});

server.listen(8080, '0.0.0.0', () => {
  console.log("Server listening on 8080 ...")
});

// chain your middleware with use()
server.use((req, resp, next) => {
        console.log("request for " + req.url);
        return next();
      })
      .use((req, res, next) => {
        //console.log("some other middleware function.");
        return next();
      });

// Routing

server.get('/add/:a/:b', (req, res, next) => {
  var result = addSvc.addNumbers(req.params.a, req.params.b);
  res.send(200, result);
  return next();
});

server.get('/subtract/:a/:b', (req, res, next) => {
  var result = addSvc.subtractNumbers(req.params.a, req.params.b);
  res.send(200, result);
  return next();
});
