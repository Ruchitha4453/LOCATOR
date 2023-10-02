var mongoose = require("mongoose");
var Loc = mongoose.model("Location");
var sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.locationsCreate = function (req, res) {
  console.log(req.body);
  const {
    name,
    address,
    facilities,
    lng,
    lat,
    days1,
    opening1,
    closing1,
    closed1,
    days2,
    opening2,
    closing2,
    closed2,
  } = req.body;
  const newLocation = {
    name,
    address,
    facilities: facilities.split(","),
    coords: [parseFloat(lng), parseFloat(lat)],

    openingTimes: [
      { days: days1, opening: opening1, closing: closing1, closed: closed1 },
      { days: days2, opening: opening2, closing: closing2, closed: closed2 },
    ],
  };
  Loc.create(newLocation)
    .then((location) => {
      console.log("Location created:", location);
      return res.status(201).json(location);
    })
    .catch((err) => {
      console.error(err);
      return res.status(400).json({ error: "Could not create location" });
    });
};
module.exports.locationsListByDistance = function (req, res) {
  sendJsonResponse(res, 200, { status: "success" });
};
module.exports.locationsReadOne = async function (req, res) {
  try {
    const location = await Loc.findById(req.params.locationid).exec();
    sendJsonResponse(res, 200, location);
    console.log(location);
  } catch (err) {
    sendJsonResponse(res, 500, { error: "An error occurred" });
  }
};
module.exports.locationsUpdateOne = function (req, res) {
  sendJsonResponse(res, 200, { status: "success" });
};
module.exports.locationsDeleteOne = function (req, res) {
  sendJsonResponse(res, 200, { status: "success" });
};
