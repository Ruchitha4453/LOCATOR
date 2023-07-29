var express = require('express');
var router = express.Router();
var ctrllocation = require('../controllers/location');
var ctrlothers = require('../controllers/others');

/* GET Locations page */
router.get('/', ctrllocation.homeList);
router.get('/location', ctrllocation.locationInfo);
router.get('/location2', ctrllocation.locationInfo2);
router.get('/location3', ctrllocation.locationInfo3);
router.get('/location/review/new', ctrllocation.addReview);

/*GET others page */
router.get('/about', ctrlothers.about);

router.get('/signin', ctrlothers.signin);

router.get('/register', ctrlothers.register);

module.exports = router;