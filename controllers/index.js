const myContact = (req, res, next) => {
    res.json('Justin Norton');
};

const myName = (req, res, next) => {
    res.json('Sheyla Norton');
};

module.exports = {myContact, myName} ;