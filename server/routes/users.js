var users = [
  {
    id: 0,
    name: "Jake Craige",
    image: "http://placecosby.com/300/300",
    description: "Aenean tristique ante eu urna pharetra tristique."
  },
  {
    id: 1,
    name: "Matthew Hager",
    image: "http://placekitten.com/200/200",
    description: "Morbi volutpat sodales sapien, eu ornare nisl viverra sit amet."
  },
  {
    id: 2,
    name: "Dalia Rihani",
    image: "http://placecosby.com/200/200",
    description: "Mauris tincidunt ante sit amet fringilla vestibulum."
  },
  {
    id: 3,
    name: "Lauren Schott",
    image: "http://placepugs.com/200/200",
    description: "Nulla vel tempus magna."
  },
  {
    id: 4,
    name: "Melissa Burnham",
    image: "http://placekitten.com/220/220",
    description: "Praesent dictum augue lorem, vitae facilisis ipsum ornare vel."
  },
  {
    id: 5,
    name: "Daniel Ochoa",
    image: "http://placekitten.com/200/200",
    description: "Maecenas at molestie purus. Nam vestibulum ac est sed suscipit."
  },
  {
    id: 7,
    name: "Joseph Leon",
    image: "http://placepugs.com/300/300",
    description: "Vivamus id fringilla libero. Donec sed enim suscipit, suscipit odio ac, tincidunt velit."
  }
];

module.exports = function(app) {
  var express     = require('express');
  var find        = require('lodash').find;
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({users: users});
  });

  usersRouter.get('/:id', function(req, res) {
    var user = find(users, { id: Number(req.params.id) });

    res.send({user: user});
  });

  app.use('/api/v1/users', usersRouter);
};
