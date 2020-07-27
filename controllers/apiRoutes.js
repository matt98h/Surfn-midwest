// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const { response } = require("express");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });


  app.get('/api/userInput', function (req, res) {
    db.UserInput.findAll()
      .then(response => res.json(response))
      .catch(err => res.json(err))
  })
  //LOCATIONS ROUTES
  app.get('/api/locations', function (req, res) {
    db.Location.findAll()
      .then(response => res.json(response))
      .catch(err => res.json(error))
  });

  app.post('/api/locations', function (req, res) {
    console.log(req.body);
    db.Location.create({
      locationName: req.body.locationName,
      state: req.body.state
    }).then(response => res.json(response))
      .catch(err => res.json(err));
  })

  //USER INFO ROUTES
  app.get('api/userInput/:user', function (req, res) {
    //Does this route get:
    //a. The Logged in user's userInputs
    //b. ANY user's userInputs <--
    // use model to join tables using sequelize 
    // grabs all user input by user

    db.User.findOne({ where: { email: req.params.user } })
      .then(userData => {
        return db.UserInput.findAll({ where: { UserId: userData._id } })
      }).then(InputData => {
        res.json(InputData); //Returns all data from userInput by User
      })

  })

  //use model to query and grab all the userInput by the location Id
  app.get('/api/userInput/:locationId', function (req, res) {

  })

  //POST ROUTES
  app.post('/api/userInput', function (req, res) {
    //post user data to the userData table in the surfinMidwest database
    // Join in our model using sequelize has many, post has one user
    // object deconstruction variable
    // const obj = {image, comment, radFactor}
    console.log("POSTING INPUT: ")
    db.UserInput.create({
      image: req.body.image,
      comment: req.body.comment,
      radFactor: req.body.radFactor,
      UserId: req.body.UserId,
      LocationId: req.body.LocationId
    }).then(response => {
      console.log(response)
      res.json(response)
    })
      .catch(err => {
        console.log(err);
        res.json(err)
      });
      
  })


  // UPDATE ROUTES
  app.put('/api/userInput', function (req, res) {
   console.log(req.body);
    db.UserInput.update(
      req.body,
      {
        where: {
          id: req.body.id,
        }
      }
    ).then(response => res.json(response))
      .catch(err => res.json(err))
  })


  // DELETE ROUTES
  app.delete('/api/UserInput/:id', function (req, res) {
    db.UserInput.destroy({
      where: {
        id: req.params.id
      }
    }).then(response => res.json(response))
      .catch(err => res.json(err))
  })

  app.delete('/api/users/:id', function(req,res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(response => res.json(response))
    .catch(err => res.json(err))
  })

};

