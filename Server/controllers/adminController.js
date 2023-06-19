const bcrypt = require("bcrypt");
const admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

function tokenGenerator({ _id, role, fullName, email }) {
  const payload = { _id, role, fullName, email };
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
  return accessToken;
}

///////////////////

const handleNewUser = async (req, res) => {
  const { role, fullName, email, phone, password } = req.body;
  // Check for duplicate usernames and emails in the db
  const duplicateEmail = await admin.findOne({ email: email }).exec();

  if (duplicateEmail) {
    return res.status(409).send({ Emessage: " Email already exists" }); //Conflict
  }
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newAdmin = new admin({
    role: role,
    fullName: fullName,
    email: email,
    phone: phone,
    password: hashedPassword,
  });

  // Save the user to the database
  newAdmin
    .save()
    .then(() => {
      const token = tokenGenerator(newAdmin);
      res.status(200).json({ token });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error registering user");
    });
};

///////////////////

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "email and password are required." });

  try {
    const foundUser = await admin.findOne({ email: email }).exec();

    if (!foundUser) return res.sendStatus(401); // Unauthorized

    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
      const token = tokenGenerator(foundUser);
      res.status(200).json({ token });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    // Handle any errors that occur during the login process
    res.status(500).json({ message: "Internal server error" });
  }
};

///////////////////

const handleUpdateAdmin = async (req, res) => {
  const adminId = req.user._id;
  const adminRole = req.user.role;
  if (adminRole === "admin") {
    try {
      // const { id } = adminId;
      const { fullName, email, phone, password } = req.body;
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log(adminId);
      const deleteUser = await admin
        .findOneAndUpdate(
          { _id: adminId },
          {
            $set: {
              fullName: fullName,
              email: email,
              phone: phone,
              password: hashedPassword,
            },
          },
          { new: true }
        )
        .exec();

      if (deleteUser.deletedCount === 0) {
        return res.status(204).json({ message: `User ID ${userId} not found` });
      }

      return res.send("Admin is Updated");
    } catch (error) {
      // Handle any errors that occur during the database query
      return res.status(500).json({ message: "Error retrieving user data" });
    }
  } else {
    return res.status(400).json({ message: "User must be admin" });
  }
};

module.exports = { handleLogin, handleNewUser, handleUpdateAdmin };
