// const form = require("../models/DonationForm");

// const handleAddForm = async (req, res) => {

//   const files = req.files;

//   const reports = req.reports;

//   const userId = req.user._id;

//   const {
//     fullName,
//     phone,
//     email,
//     city,
//     streetName,
//     buldingNumber,
//     TitleOfConsept,
//     DescriptionOfConsept,
//     typeOfneeds,
//   } = req.body;

//   if (!files && !reports) {
//     return res.status(400).send("No files provided"); // Change the error message
//   }
//   const imagePaths = files?.map((file) => file.path);
//   const reportsPaths = reports?.map((file) => file.path);

//   // Check for duplicate usernames and emails in the db
//   const duplicateForm = await form.findOne({ _id: req.body._id }).exec();

//   if (duplicateForm) {
//     return res.status(409).send({ message: "the form already exist" }); //Conflict
//   }
//   const newForm = new form({
//     beneficerId: userId,
//     fullName: fullName,
//     phone: phone,
//     email: email,
//     city: city,
//     streetName: streetName,
//     buldingNumber: buldingNumber,
//     TitleOfConsept: TitleOfConsept,
//     DescriptionOfConsept: DescriptionOfConsept,
//     Images: imagePaths,
//     medicalReport: reportsPaths,
//     typeOfneeds: typeOfneeds,
//   });

//   // Save the user to the database
//   newForm
//     .save()
//     .then(() => {
//       res.status(200).send("Ok");
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send("Error registering user");
//     });
// };

// module.exports = { handleAddForm };

const form = require("../models/DonationForm");

const acceptOrg = async (req, res) => {
  try {
    const userId = req.params.id;
    const { totalPriceByAdmin } = req.body;
    console.log(totalPriceByAdmin);
    const user = await form.findById(userId);
    user.isApproved = true;
    user.totalPriceByAdmin = totalPriceByAdmin;
    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update Donor" });
  }
};
const deleteForm = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await form.findById(userId);
    user.isDeleted = true;

    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete form" });
  }
};
const handleAddForm = async (req, res) => {
  const files = req.files;
  const userId = req.user._id;
  const {
    fullName,
    phone,
    email,
    city,
    streetName,
    buldingNumber,
    TitleOfConsept,
    DescriptionOfConsept,
    typeOfneeds,
  } = req.body;

  if (!files) {
    return res.status(400).send("No files provided");
  }

  const images = files["images"]; // Array of image files
  const reports = files["reports"]; // Array of report files

  if (!images || !reports) {
    return res.status(400).send("Both images and reports are required");
  }

  const imagePaths = images.map((image) => image.path);
  const reportPaths = reports.map((report) => report.path);

  // Check for duplicate forms in the database
  const duplicateForm = await form.findOne({ _id: req.body._id }).exec();
  if (duplicateForm) {
    return res.status(409).send({ message: "The form already exists" });
  }

  const newForm = new form({
    beneficerId: userId,
    fullName: fullName,
    phone: phone,
    email: email,
    city: city,
    streetName: streetName,
    buldingNumber: buldingNumber,
    TitleOfConsept: TitleOfConsept,
    DescriptionOfConsept: DescriptionOfConsept,
    Images: imagePaths,
    medicalReport: reportPaths,
    typeOfneeds: typeOfneeds,
  });

  // Save the form to the database
  newForm
    .save()
    .then(() => {
      res.status(200).send("Form saved successfully");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error saving form");
    });
};

const getForms = async (req, res) => {
  try {
    const allData = await form.find();
    res.status(200).json(allData);
  } catch (err) {
    console.log("Error retrieving data:", err);
    res.status(500).json({ err: "An error occurred while getting data" });
  }
};

const getFormsbyID = async (req, res) => {
  const formId = req.params.id;
  try {
    const allData = await form.findOne({ _id: formId });
    res.status(200).json(allData);
  } catch (err) {
    console.log("Error retrieving data:", err);
    res.status(500).json({ err: "An error occurred while getting data" });
  }
};
const getFormsbyBeneficerID = async (req, res) => {
  const userId = req.user._id;

  try {
    const allData = await form.findOne({ beneficerId: userId });
    res.status(200).json(allData);
  } catch (err) {
    console.log("Error retrieving data:", err);
    res.status(500).json({ err: "An error occurred while getting data" });
  }
};
// const handleUpdateForm = async (req, res) => {
//   const adminRole = req.user.role;
//   if (adminRole === "admin") {
//     try {
//       const { totalPrice, isDeleted } = req.body;
//       console.log(adminRole);
//       const updateBeneficer = await beneficer
//         .findOneAndUpdate(
//           { _id: beneficerId },
//           {
//             $set: {
//               fullName: fullName,
//               email: email,
//               phone: phone,
//               password: hashedPassword,
//               image: image,
//             },
//           },
//           { new: true }
//         )
//         .exec();

//       if (updateBeneficer.deletedCount === 0) {
//         return res.status(204).json({ message: `User ID ${userId} not found` });
//       }

//       return res.send("beneficer is Updated");
//     } catch (error) {
//       // Handle any errors that occur during the database query
//       return res.status(500).json({ message: "Error retrieving user data" });
//     }
//   } else {
//     return res.status(400).json({ message: "User must be admin" });
//   }
// };

const handleUpdateFormBydonor = async (req, res) => {
  try {
    const { donorPaid, donorId, formId } = req.body;
    const getPrevPaids = await form.findOne({ _id: formId });
    const updateFromDonor = await form
      .findOneAndUpdate(
        { _id: formId },
        {
          $push: {
            donorId: donorId, // Add the new donorId to the array
          },
          $set: {
            donorPaid: donorPaid,
            // donorId: donorId,
            sumOfPaid: getPrevPaids.sumOfPaid + donorPaid,
          },
        },
        { new: true }
      )
      .exec();
    // console.log(updateFromDonor);
    return res.send("form is Updated");
  } catch (error) {
    // Handle any errors that occur during the database query
    return res.status(500).json({ message: "Error retrieving user data" });
  }
};

module.exports = {
  handleAddForm,
  getForms,
  handleUpdateFormBydonor,
  getFormsbyID,
  getFormsbyBeneficerID,
  acceptOrg,
  deleteForm,
};
