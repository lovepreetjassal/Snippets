const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send("It works");
});

app.listen(8080)