const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const app = express();

//to use with Render. either a render port from environment variable or local whichever available
const port = process.env.PORT || 3000; 


app
.use(bodyParser.json())
.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to data and running on port ${port}`);
    }
});

// app.listen(port, () => {
//     console.log(`Sheyla's sever is running on port ${port}`);
// });

