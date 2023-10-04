const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If the user is logged in, execute the route function that will allow them to view the gallery
    // We call next() if the user is authenticated
    next();
  }
};

module.exports = withAuth;
