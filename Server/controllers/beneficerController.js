const bcrypt = require("bcrypt");
const beneficer = require("../models/Beneficer");
const jwt = require("jsonwebtoken");

function tokenGenerator({ _id, role, fullName, email }) {
  const payload = { _id, role, fullName, email };
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
  return accessToken;
}

///////////////////

const handleNewUser = async (req, res) => {
  const { role, fullName, email, phone, password, image } = req.body;
  // Check for duplicate usernames and emails in the db
  const duplicateEmail = await beneficer.findOne({ email: email }).exec();

  if (duplicateEmail) {
    return res.status(409).send({ Emessage: " Email already exists" }); //Conflict
  }
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newBeneficer = new beneficer({
    role: role,
    fullName: fullName,
    email: email,
    phone: phone,
    password: hashedPassword,
    image: image,
  });

  // Save the user to the database
  newBeneficer
    .save()
    .then(() => {
      const token = tokenGenerator(newBeneficer);
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
    const foundUser = await beneficer.findOne({ email: email }).exec();

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
// get all beneficers
const getAllBeneficer = async (req, res) => {
  try {
    const allData = await beneficer.find();
    res.status(200).json(allData);
    // console.log(allData);
  } catch (err) {
    console.log("Error retrieving data:", err);
    res.status(500).json({ err: "An error occurred while getting data" });
  }
};
// get beneficer
const getBeneficer = async (req, res) => {
  const userId = req.user._id;

  try {
    const user = await beneficer.findById(userId).exec();

    if (!user) {
      return res.status(204).json({ message: `User ID ${userId} not found` });
    }

    return res.json(user);
  } catch (error) {
    // Handle any errors that occur during the database query
    return res.status(500).json({ message: "Error retrieving user data" });
  }
};

///////////////////

const deleteBeneficer = async (req, res) => {
  const adminRole = req.user.role;
  if (adminRole === "admin") {
    try {
      const { id } = req.params;
      const { isDeleted } = req.body;
      const deleteUser = await beneficer
        .findOneAndUpdate(
          { _id: id },
          { $set: { isDeleted: isDeleted } },
          { new: true }
        )
        .exec();

      if (deleteUser.deletedCount === 0) {
        return res.status(204).json({ message: `User ID ${userId} not found` });
      }

      return res.send("User Deleted");
    } catch (error) {
      // Handle any errors that occur during the database query
      return res.status(500).json({ message: "Error retrieving user data" });
    }
  } else {
    return res.status(400).json({ message: "User must be admin" });
  }
};

///////////////////

const handleUpdateBeneficer = async (req, res) => {
  const beneficerId = req.user._id;
  const beneficerRole = req.user.role;
  if (beneficerRole === "beneficer") {
    try {
      const { fullName, email, phone, password, image } = req.body;
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log(beneficerId);
      const updateBeneficer = await beneficer
        .findOneAndUpdate(
          { _id: beneficerId },
          {
            $set: {
              fullName: fullName,
              email: email,
              phone: phone,
              password: hashedPassword,
              image: image,
            },
          },
          { new: true }
        )
        .exec();

      if (updateBeneficer.deletedCount === 0) {
        return res.status(204).json({ message: `User ID ${userId} not found` });
      }

      return res.send("beneficer is Updated");
    } catch (error) {
      // Handle any errors that occur during the database query
      return res.status(500).json({ message: "Error retrieving user data" });
    }
  } else {
    return res.status(400).json({ message: "User must be admin" });
  }
};

module.exports = {
  handleNewUser,
  handleLogin,
  getAllBeneficer,
  getBeneficer,
  deleteBeneficer,
  handleUpdateBeneficer,
};
