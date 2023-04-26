const routes = require('express').Router();

const controller = require('../controllers/contacts');

// routes.get('/', controller.myContact);
// routes.get('/me', controller.myName);

//get request to return all documents in contacs collection
routes.get('/', controller.allContacts);
// routes.get('/contacts', controller.allContacts);

//get request to return a single document from contacts collection
// where id matches the id from a query parameter
routes.get('/:id', controller.singleContact);

routes.post('/', controller.newContact);
routes.put('/:id', controller.updateContact);
routes.delete('/:id', controller.deleteContact);

module.exports = routes;
