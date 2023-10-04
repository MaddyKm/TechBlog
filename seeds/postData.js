const { Post } = require("../models");

const postdata = [
  {
    title: "How I learned to love my keyboard",
    content:
      "It was a very dark and stormy night. Not even my blankets could provide the comfort I needed. But there she was. Glowing in the dark. My keyboard",
    post_username: "Keyboardl0ver",
  },
  {
    title: "Oh Sql, MYSQL",
    content:
      "O SQL! my SQL! our fearful code is done,The computer has weather’d every server, the prize we sought is won,The port is near, the bells I hear, the people all exulting, While follow eyes the steady keel, the vessel grim and daring;",
    post_username: "Sequelizer79",
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
