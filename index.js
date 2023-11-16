import express from "express";
import fetch from "node-fetch";
import asyncHandler from 'express-async-handler';

const PORT = 3001;
const app = express();
app.use(express.urlencoded());
app.use(express.json());

app.post('/get-movie', asyncHandler(async (req, res, next) => {
    console.log(`Received HTTP POST request for movie: ${req.body.search}`);
    const search = req.body.search;
    const url = `http://www.omdbapi.com/?s=${search}&apikey=43f4b9d0`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Received data from API: ${data.Search}\n`)
    console.log(`Sending HTTP Response to requestor.`)
    res.send(data)
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});