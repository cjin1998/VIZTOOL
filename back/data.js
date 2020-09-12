
// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number, 
    originCountry: String, 
    originLong: Number, 
    originLat: Number, 
    destCountry: String, 
    destLong: Number, 
    destLat: Number,  
    numRefugees: Number, 
    numAsylumSeekers: Number 
//if incoming
  //Percentage of total migrants departing from each country 
//if outging
  //Percentage of total migrants departing from the selected country 
  },
  { timestamps: true }
);
// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);