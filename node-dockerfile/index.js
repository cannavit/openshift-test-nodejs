const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send('🚀 Hello World!!! NodeJS with Dockerfile 📦')
})

let PORT =process.env.PORT || 8080
app.listen(PORT, ()=> console.log(`🧪 listening on port: ${PORT}`))
