const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;

const baseURL = 'https://apiwithjsonresponse.example.com';

app.get('/path/:param', async (req, res) => {
    let result = await getData(req.params.param);
    res.send(result);
})

app.listen(port, () => {
    console.log("Express Server is running on port " + port);
})

async function getData(param) {
    let result = await axios.get(`${baseURL}/${param}`);
    return result.data;
}