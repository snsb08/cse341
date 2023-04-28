const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

const controller1 = require('../controllers');

routes.get('/', controller1.myContact);
routes.get('/me', controller1.myName);
routes.use('/contacts', require('./contacts'));

module.exports = routes;
