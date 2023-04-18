const express = require('express');
const app = express();

//to use with Render. either a render port from environment variable or local whichever available
const port = process.env.PORT || 3000; 


app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Sheyla's sever is running on port ${port}`);
});

