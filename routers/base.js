const _ = require('lodash');
const express = require('express');
const pluralize = require('pluralize');

// We need a reference to pull in all of our controllers to access them at runtime
const controllers = require('../controllers');

const baseRouter = new express.Router();

const getController = (name) => controllers[name];

baseRouter.use((req, res, next) => {
  // Middleware
  next();
});

const controllerNames = _.keys(controllers);

_.forEach(controllerNames, (ctrl) => {
  baseRouter.get(`/${pluralize(ctrl)}`, (req, res, next) => {
    const controller = getController(ctrl);
  
    // You'll likely have to do some more parsing of the url, and call next if it can't be parsed
    // So here is where you'd handle things like if there's an id - then use get, else getAll
  
    controller.getAll().then((models) => {
      res.status(200).send(models);
    }).catch((err) => {
      // Crap, didn't work, pass the error to next
      next(err);
    });
  });
});

module.exports = baseRouter;
