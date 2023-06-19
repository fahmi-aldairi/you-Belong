const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (authHeader == "Bearer null") return res.json({ error: "Null token" });
  const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  req.user = {
    _id: user._id,
    role: user.role,
    fullName: user.fullName,
    email: user.email,
  };
  next();
};

// const verifyJWT2 = (req, res, next) => {
//   const authHeader = req.body.headers.Authorization;
//   console.log(req.body.headers.Authorization);
//   const token = authHeader && authHeader.split(" ")[1];
//   if (authHeader == "Bearer null") return res.json({ error: "Null token" });
//   const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//   req.user = {
//     _id: user._id,
//     role: user.role,
//   };
//   next();
// };
module.exports = { verifyJWT };
