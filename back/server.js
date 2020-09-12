const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();
// this is our MongoDB database
const dbRoute =
  "mongodb+srv://admin:admin@cluster0-tcrld.mongodb.net/testo?retryWrites=true&w=majority";
// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/getDirectionalData", (req, res) => {
  const country = req.headers.country; //req.body.Country;
  const top = parseInt(req.headers.top); //req.body.top
  console.log("Request:");
  console.log(country);
  console.log("this is top", req.headers.top);
  if (req.headers.direction == "Outgoing") {
    Data.find({ originCountry: country }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data }); //.limit(3);
    })
      .sort({ numAsylumSeekers: -1 })
      .limit(top);
  }
  if (req.headers.direction == "Incoming") {
    Data.find({ destCountry: country }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data }); //.limit(3);
    })
      .sort({ numAsylumSeekers: -1 })
      .limit(top);
  }
}); //.sort({long:1}).

router.get("/getPath", (req, res) => {
  const countryO = req.headers.countryo;
  const countryD = req.headers.countryd;
  Data.find({ destCountry: countryD, originCountry: countryO }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  }).limit(1);
});

/*
// this is our update method DONE
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});
*/

// this is our delete method DONE
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid DONE
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();
  console.log("Post req:");
  console.log(req.body);
  const {
    id,
    originCountry,
    originLong,
    originLat,
    destCountry,
    destLong,
    destLat,
    numRefugees,
    numAsylumSeekers
  } = req.body;
  /*
  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }*/
  data.id = id;
  data.originCountry = originCountry;
  data.originLong = originLong;
  data.originLat = originLat;
  data.destCountry = destCountry;
  data.destLong = destLong;
  data.destLat = destLat;
  data.numAsylumSeekers = numAsylumSeekers;
  data.numRefugees = numRefugees;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
