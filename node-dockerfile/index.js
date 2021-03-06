const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send('๐ Hello World!!! NodeJS with Dockerfile ๐ฆ')
})

let PORT =process.env.PORT || 8080
app.listen(PORT, ()=> console.log(`๐งช listening on port: ${PORT}`))
