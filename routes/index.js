const routes = require('express').Router();

const controller1 = require('../controllers');

routes.get('/', controller1.myContact);
routes.get('/me', controller1.myName);

module.exports = routes;