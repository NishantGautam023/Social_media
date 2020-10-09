const express = require('express');
const app = express();
const port = 8000;

// use express router 
app.use('/', require('./routes/index'));
// /routes/index is same as doing /routes

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

console.log("route has been loaded")






app.listen(port, function(err) {
    if(err) {
        console.log(`Error is ${error}`)
    }
    console.log(`The Server is running on Port number: ${port}`)
})