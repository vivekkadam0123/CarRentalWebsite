const express = require("express");                    
const path = require("path");
//var qs = require('qs');


const app = express();
app.use(express.urlencoded());


app.use(express.static(path.join(__dirname, "public")));

const PORT = 1000;

const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/wroomcar',{useNewUrlParser:true,useUnifiedTopology:true});


//mongoose schema
var bookingschema=new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  address: String,
  license: String,
  vehicle: String,
  datetime: String,
  duration: String,
  timespan: String,
  calculatedprice: String,
  accept: String
})

//mongoose model
var booking= mongoose.model('booking', bookingschema);


//mongoose
app.post("/", (req, res) => {
  var data=new booking(req.body);
  data.save();
  res.redirect('/');
})


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});


