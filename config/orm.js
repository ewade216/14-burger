// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: function(cb) {
    //set up query
    var queryString = "SELECT * FROM burgers;";
    //actually make call to mysql
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      //log results what is that? THink that it is the info you went to select
      // console.log("ORM - Select All");
      // console.log(result);
      cb(result);
    });
  },

  insertOne: function(burgerDesc, cb) {
    var queryString = 'INSERT INTO burgers (burger_name) VALUES ("' + burgerDesc + '");';

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      //log results what is that? THink that it is the info you went to select
      console.log("ORM - Insert One");
      console.log(result);
      cb(result);
    });
  },


  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(burgerID, cb) {
    var queryString = "UPDATE burgers SET devoured=1 WHERE id=" + burgerID + ";"

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log("ORM - update");
      cb(result);
    });
  },

};

// Export the orm object for the model (cat.js).
module.exports = orm;
