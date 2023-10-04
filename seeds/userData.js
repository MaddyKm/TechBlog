const { User } = require("../models");

const userData = [
  {
    username: "Catluver78",
    password: "Meowmeow!",
  },
  {
    username: "JohnJacob",
    password: "Hisnameismyname2",
  },
  {
    username: "hats4sale",
    password: "Yougivemebackmyhat",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
