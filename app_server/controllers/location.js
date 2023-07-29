module.exports.homeList= function(req,res){
    res.render('location-list',{title:'Home'});
};

module.exports.locationInfo= function(req,res){
    res.render('location-info',{title:'location '});
};
module.exports.locationInfo2= function(req,res){
    res.render('location-info2',{title:'location '});
};
module.exports.locationInfo3= function(req,res){
    res.render('location-info3',{title:'location '});
};

module.exports.addReview= function(req,res){
    res.render('location-review-form',{title:'review'});
};