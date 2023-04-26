const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;



const allContacts = async (req, res) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const singleContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const newContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const result = await mongodb.getDb().db().collection('contacts').insertOne(contact);
  if (result) {
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json({
      message: 'Contact added succesfully',
      newContact: result
    });
  } else {
    res.status(500).json({
      message: 'An error occured while creating new contact'
    });
  }
};

const updateContact = async (req, res) => {
  const userId = new ObjectId({ id: req.params.id });
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  // ObjectId.updateOne({ id: req.params.id}, contact)
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .replaceOne({ _id: userId }, contact);
  if (result.modifiedCount > 0) {
    res.status(204).json({
      message: 'Contact updated successfully'
    });
  } else {
    res.status(500).json({
      message: 'An error occured while updating'
    });
  }
};

const deleteContact = async (req, res) => {
  const userId = new ObjectId({ id: req.params.id });
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .deleteOne({ _id: userId }, contact);
  if (result) {
    res.status(200).json({
      message: 'Contact deleted successfully'
    });
  } else {
    res.status(500).json({
      message: 'An error occured while deleting'
    });
  }
};


module.exports = { allContacts, singleContact, newContact, updateContact, deleteContact };
