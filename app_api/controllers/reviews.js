var sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.reviewsCreate = function (req, res) {
  sendJsonResponse(res, 200, { status: "success" });
};
module.exports.reviewsReadOne = async function (req, res) {
  try {
    // Find the location by ID and select its name and reviews field
    const location = await Loc.findById(req.params.locationid).select(
      'name reviews'
    );

    if (!location) {
      // If location is not found, return a 404 response
      return sendJsonResponse(res, 404, { message: 'Location not found' });
    }

    if (!location.reviews || location.reviews.length === 0) {
      // If no reviews are found for this location, return a 404 response
      return sendJsonResponse(res, 404, {
        message: 'No reviews found for this location',
      });
    }

    // Find the specific review by ID within the location's reviews array
    const review = location.reviews.id(req.params.reviewid);

    if (!review) {
      // If the review is not found, return a 404 response
      return sendJsonResponse(res, 404, { message: 'Review not found' });
    }

    // If everything is successful, construct the response JSON
    const response = {
      location: {
        name: location.name,
        id: req.params.locationid,
      },
      review: review,
    };

    // Send a 200 OK response with the constructed JSON
    return sendJsonResponse(res, 200, response);
  } catch (err) {
    // Handle other errors (e.g., database connection issues) with a 500 response
    return sendJsonResponse(res, 500, { message: 'Internal server error' });
  }
};
module.exports.reviewsUpdateOne = function (req, res) {
  sendJsonResponse(res, 200, { status: "success" });
};
module.exports.reviewsDeleteOne = function (req, res) {
  sendJsonResponse(res, 200, { status: "success" });
};
