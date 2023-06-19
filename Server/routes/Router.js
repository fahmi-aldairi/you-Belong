const express = require("express");
const router = express.Router();
const donorController = require("../controllers/donorController");
const beneficerController = require("../controllers/beneficerController");
const adminController = require("../controllers/adminController");
const donationForm = require("../controllers/donationFoController");
const AboutUsController = require("../controllers/AboutUsController");
const contactUsController = require("../controllers/contactUsController");
const verifyJWT = require("../middleware/verifyJWT");
const multer = require("multer");
const path = require("path");

// Configure Multer to specify the destination and filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Check the file type and set the destination directory accordingly
    if (file.fieldname === "images") {
      cb(null, "images");
    } else if (file.fieldname === "reports") {
      cb(null, "reports");
    } else {
      cb(new Error("Invalid fieldname"));
    }
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

/////////////////////////////////////
//admin

router.post("/createAdmin", adminController.handleNewUser);
router.post("/adminVerify", adminController.handleLogin);
router.put(
  "/UpdateAdmin",
  verifyJWT.verifyJWT,
  adminController.handleUpdateAdmin
);

// Login and Registeration Donor

router.post("/createNewDonor", donorController.handleNewUser);
router.post("/donorVerify", donorController.handleLogin);
router.get("/getAllDonors", donorController.getAllDonors);
router.get("/getDonor", verifyJWT.verifyJWT, donorController.getDonor);
router.put(
  "/deleteDonor/:id",
  verifyJWT.verifyJWT,
  donorController.deleteDonor
);
router.put(
  "/UpdateDonor",
  verifyJWT.verifyJWT,
  donorController.handleUpdateDonor
);

// Login and Registeration Beneficer

router.post("/createNewBeneficer", beneficerController.handleNewUser);
router.post("/beneficerVerify", beneficerController.handleLogin);
router.get("/getAllBeneficer", beneficerController.getAllBeneficer);
router.get(
  "/getBeneficer",
  verifyJWT.verifyJWT,
  beneficerController.getBeneficer
);
router.put(
  "/deleteBeneficer/:id",
  verifyJWT.verifyJWT,
  beneficerController.deleteBeneficer
);
router.put(
  "/UpdateBeneficer",
  verifyJWT.verifyJWT,
  beneficerController.handleUpdateBeneficer
);

// Donation Form

router.post(
  "/SubmitForm",
  verifyJWT.verifyJWT,
  upload.fields([
    { name: "images", maxCount: 5 },
    { name: "reports", maxCount: 5 },
  ]),
  donationForm.handleAddForm
);

router.get("/getForms", donationForm.getForms);
router.get("/getForms/:id", donationForm.getFormsbyID);
router.get(
  "/getFormByBeniId",
  verifyJWT.verifyJWT,
  donationForm.getFormsbyBeneficerID
);
router.post("/formByDonor", donationForm.handleUpdateFormBydonor);
router.post("/donorPaid", donorController.handleUpdateDonorOnPaid);
router.put("/getForms/accept/:id", donationForm.acceptOrg);
router.put("/getForms/delete/:id", donationForm.deleteForm);

////////////////////

// get about us data
router.get("/aboutus", AboutUsController.getAboutUsUpdate);

// put the about us data "admin"
router.put("/aboutus", AboutUsController.aboutUsUpdate);

// post the data from the contact us form
router.post("/contacts", contactUsController.postContactUsData);

module.exports = router;
