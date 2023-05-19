const express = require("express");
const app =express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb+srv://user0:testdb123@cluster0.ibl8hcg.mongodb.net/form1data",{useNewUrlParser:true},{useUnifiedTopology:true})

const formSchema ={
    firstName : String,
    lastName : String
}

const Form = mongoose.model("Form", formSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req,res){
    let newForm = new Form({
        firstName : req.body.fname,
        lastName : req.body.lname
    });
    newForm.save();
    res.redirect("/");
})


app.listen(3000, function(){
    console.log("Server is running on 3000");

})

