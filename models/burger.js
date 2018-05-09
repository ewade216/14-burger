// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgerLogic = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // Pass in burger description
  create: function(burgerDesc, cb) {
    orm.insertOne(burgerDesc, function(res) {
      cb(res);
    });
  },
  //Pass in burger ID
  update: function(burgerID, cb) {
    orm.update(burgerID, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller
module.exports = burgerLogic;
