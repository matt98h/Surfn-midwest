const data = require('../db/magicJSON/data1.json')
const fs = require("fs")

module.exports = function (app) {
    
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.get("/api/data", function (req, res) {
        fs.readFile("./db/magicJSON/data1.json", function(error, data){
            console.log(error)
            const object = JSON.parse(data)
            console.log(object)
            res.json(object);
        })
      
    });
}