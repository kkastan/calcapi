# CalcApi

CalcApi is a rudimentary api service written in node\.js. It serves as an example of how to implement a RESTful service using the [restify](http://restify.com/) framework and [jasmine](https://jasmine.github.io/2.0/node.html) testing package.


To run the service locally using docker-compose:

```
$ docker-compose up calcapi
```

To run the test suite:
```
$ docker-compose run test
```

## Restify
`server.js` is fairly straightforward. It creates a restify server, binds its address, illustrates some basic hooks for middleware and event listeners, and defines the application's URL routing. See http://restify.com for more details.

### Error Handling
This is an area which deserves further discussion. Note that the CalcApi server registers an `uncaughtException` event handler. This is to allow for uncaught exceptions being written as errors to the application log, as opposed to being swallowed and simply written to the http response JSON as a short description of the error without much context.

Restify's error handling documenation is promising. A more robust error handling configuration is left as an excersize for the reader at this time.

## Jasmine
The Jasmine tests are located in the `spec/` directory. Jasmine supports fine grained unit tests as well as coarser tests on server endpoints. It employes an elegant BDD syntax where test cases can be expressed in an easy and human readable format:

```
describe some component
  it's supposed to do some specifc thing
    assert that it did in fact do the specific thing

  it's supposed to do some other specific thing
    assert that it did in fact do that other specific thing

  etc.
```

See `spec/calc_spec.js` for server level tests and `spec/operations_spec.js` for unit test level tests.

See https://jasmine.github.io/2.0/node.html for more details.

## Configuration Notes
Jasmine is configured in `package.json` as follows:

```
"scripts": {
  "test": "jasmine-node spec --forceexit --captureExceptions",
  "start": "node server.js"
}
```
Note the `--forceexit` and `--captureExceptions` flags. They are required for teh following reasons:
* `--forceexit` To stop the jasmine process after test completion. Without this flag the server that jasmine starts to run the tests in will run indefinitely.
* `--captureExceptions` To prevent losing errors which occur outside of the jasmine stack. For example without this option errors such as javascript syntax errors will not get logged to stdout or stderr and will **not** result in a non-zero exit code.
