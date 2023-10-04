const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    console.log("getting posts");
    const postData = await Post.findAll();

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    console.log("getting posts");
    const postData = await Post.findAll();

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("dashboard", { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
