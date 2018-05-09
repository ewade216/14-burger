var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgerModel = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgerModel.all(function(data) {
    var hbsObject = {
      burgerGet: data
    };
    console.log("Get Data",hbsObject)
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  //pass in burger description
  console.log("Post - burgerInfo", req.body.burgerInfo);
  burgerModel.create(req.body.burgerInfo, function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/", function(req, res) {
  //pass in id of burger
  burgerModel.update(req.body.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Export routes for server.js to use.
module.exports = router;
