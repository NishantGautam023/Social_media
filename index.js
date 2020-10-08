const express = require('express');
const app = express();
const port = 8000;

// use express router 

app.use('/', require('./routes/index'));
console.log("route has been loaded")






app.listen(port, function(err) {
    if(err) {
        console.log(`Error is ${error}`)
    }
    console.log(`The Server is running on Port number: ${port}`)
})