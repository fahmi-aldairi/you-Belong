const donation = require("../models/DonationCash");

const handleNewDonate = async (req, res) => {
  const { role, fullName, email, phone, password } = req.body;
  // Check for duplicate usernames and emails in the db
  const duplicateEmail = await donor.findOne({ email: email }).exec();

  if (duplicateEmail) {
    return res.status(409).send({ Emessage: " Email already exists" }); //Conflict
  }
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newDonor = new donor({
    role: role,
    fullName: fullName,
    email: email,
    phone: phone,
    password: hashedPassword,
  });

  // Save the user to the database
  newDonor
    .save()
    .then(() => {
      const token = tokenGenerator(newDonor);
      res.status(200).json({ token });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error registering user");
    });
};

module.exports = { handleNewDonate };
