# LAB - 00

## Deployment Exercise

### Author: Jonathan Kimball

### Links and Resources

* [submission PR]()

* [travis](https://travis-ci.com/401-advanced-javascript-kimball/lab-00)
* [front-end](https://jk-401js-lab-00.herokuapp.com/)

#### Documentation

* [jsdoc](https://jk-401js-lab-00.herokuapp.com/docs)

### Modules

### Setup

#### `.env` requirements

* `PORT` - Port Number

#### Running the app

* `npm start`
* Endpoint: `/`
  * Returns true or false
* Endpoint: `/docs`
  * Renders Developer Documentation
  
#### Tests

* Unit Tests: `npm test`
* Lint Tests: `npm run lint`

## Lab-00 Deployment Workshop

## This is the starter code for lab-00

Please do the following:

### 1) Add project dependencies to this project:

* jest
* jsdoc
* eslint
  
### 2) Add config files lab submission requirements:

* .eslintrc.json
* .travis.yml
* .gitignore
* docs/config/jsdoc.config.json

### 3) Add scripts to your package.json(under the scripts property).

* Make sure your linter and tests are passing

### 4) Deploy to github and heroku!!

### 5) Submit a link to the github repo with this code.  Make sure you add links to your travis build and heroku deployment to this README!!

# LAB: Node Ecosystem

Time to get hands on with Test Driven Development (TDD) and Continuous Integration (CI). For this lab, you will be writing a fully tested validation module and shepherd it through a CI pipeline.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

#### Getting Started
In the `starter_code` folder, there is a partial implementation of a "validator" module

In the `root` of that folder, you'll find a file called `index.js` that wires in the validator module and attempts to run functions imported from it.

In the `__tests__` folder, you'll find a file called `validator.test.js` that wires in the validator module, sets up some testing (optimistically) but contains no test code

## Requirements

### Developer Implementation
**USE TDD Practices**

Write an object validation module that exports a "validate" method that can, based on the inputs, validate whether or not an entity is satisfactory. 

Things we want to be able to validate

* Is the entity itself the right type (array, object, function etc)
* All all "required" properties present and do they have values?
* For any property that specifies a type, does the value match that type?

#### Testing
*Validation Module* 
* Test each method for proper/improper use (required params)
* Validate that validation is reliable
* Validate proper error conditions/returns

***Software Engineering Note!***
*Externalizing type checking and argument validation is a good exercise in refactoring code*

---

### End User Implementation
* Use the `index.js` file to validate objects using the imported functions from the module
* `console.log()` the return values


### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

