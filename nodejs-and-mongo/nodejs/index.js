const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

//! MONGO CONNECTION --->>>
const mongoose = require("mongoose");

let MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/testdb";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: "true",
});

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});

mongoose.connection.on("connected", (err, res) => {
  console.log("🟢 Mongoose is connected");
});

//! Mongo Schema ---- >>

const status = ["open", "in-process", "close", "blocked"];
const schemaTask = mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  taskDay: {
    type: Date,
  },
  role: {
    type: String,
    enum: status,
    default: "open",
  },
});

let Task = mongoose.model("Task", schemaTask);
//? >>>>

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//! Define APIS>>>>
app.get("/", (req, res) => {
  res.send("🚀 Hello World!!! NodeJS with MongoDB 📦");
});

app.get("/tasks", async (req, res) => {
  console.log("[GET]/tasks ");
  let taskList = await Task.find({});
  res.status(200).json({
    status: "success",
    results: taskList,
  });
});

//TODO add validator
app.post("/tasks", async (req, res) => {
  let taskList = await Task.create(req.body);
  let code = 200;
  let message = "success";
  console.log(taskList);
  res.status(code).json({
    status: message,
    results: taskList,
  });
});

//? <<<

let PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🧪 listening on port: ${PORT}`));
