require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const newLocal = "./routes/Router";
const Routes = require(newLocal);
const dbURI = process.env.DBURI;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));
app.use("/reports", express.static("reports"));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(Routes);

module.exports = {
  server: app,
  start: () => {
    mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        app.listen(PORT, () => {
          console.log(`Starting server on port ${PORT}`);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
