const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err) {
    if(err) {
        console.log(`Error is ${error}`)
    }
    console.log(`The Server is running on Port number: ${port}`)
})