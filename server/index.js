require("dotenv").config();
const express = require('express');
const app = express();
app.use(express.json());

const cors = require("cors")
app.use(cors());
const fetch = require("node-fetch")


app.post("/", async (req, res) => {
    const title = req.body.title;

    try {

        const response = await fetch(`https://newsapi.org/v2/everything?q=${title}&sources=bbc-news&apiKey=${process.env.api}&lang=en`)
        const data = await response.json();
        res.status(200).json(data);


    } catch (error) {
        console.log({"error" : "error in post / route"} ); 
    }

})


const port = (process.env.PORT) || 5000 ; 
app.listen(port , () => {
    console.log("Server Running on port 5000");
})