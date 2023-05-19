/*const express = require("express");
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


app.use(express.static('public'))


/*app.get("/",function(req,res){
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

})*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
