const checkToken = (req, res, next) => {
  console.log(req.headers.token);
  if (!req.headers.token) {
    next();
  } else {
    res.status(401);
    res.send({ message: "Access denies" });
  }
};

module.exports = checkToken;
