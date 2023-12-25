const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require('./models/user');
const emailModel = require("./models/email");
require("dotenv").config();

const app = express();
const port = process.env.port || 4000;

app.use(cors());
app.use(express.json());



app.post("/signup", async (req, res) => {
    try{
  const result = await userModel.create(req.body);
  res.json(result);
    }catch(err) {
        res.json(err);
    }
})

app.post("/login", (req, res) => {
    const {username, password} =req.body;
    userModel.findOne({username: username})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json('success')
            }else {
                res.json('incorrect')
            }
        }else {
            res.json('no record found');
        }
    })
})

app.post('/email', async (req, res) => {
    try{
        const result = await emailModel.create(req.body);
        res.json(result);
          }catch(err) {
              res.json(err);
          }
})
mongoose.connect("mongodb://127.0.0.1:27017/appDB")
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running on port: ${port}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
