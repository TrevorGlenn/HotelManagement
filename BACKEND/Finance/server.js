const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
//const dotenv=require("dotenv");
const app=express();
require("dotenv").config();

const PORT=process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL, {

    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false

});

const connection=mongoose.connection;
connection.once("open", ()=>{
    console.log("mongo DB Connection success");
})
//feeDetails
const feeDetails=require("./routes/FeeDetails.js");

app.use("/feeDetails",feeDetails);






app.listen(PORT, ()=>{
    console.log('Serve is up and running ${PORT}')
})
