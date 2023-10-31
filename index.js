const express = require("express");

const config = require("./pkg/config");
require("./pkg/db");

const {
  getAllUniversities,
  getSingleUniversity,
  createUniversity,
  updateUniversity,
  removeUniversity,
} = require("./handlers/universities");

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.post("/api/v1/university", createUniversity);
app.get("/api/v1/university/:id", getSingleUniversity);
app.get("/api/v1/university", getAllUniversities);
app.put("/api/v1/university/:id", updateUniversity);
app.delete("/api/v1/university/:id", removeUniversity);

app.post("/api/v1/faculty", createFaculty);
app.get("/api/v1/faculty/:id", getSingleFaculty);
app.get("/api/v1/faculty", getAllFaculty);
app.put("/api/v1/faculty/:id", updateFaculty);
app.delete("/api/v1/faculty/:id", removeFaculty);

app.listen(config.getSection("development").port, (err) => {
  err
    ? console.error(err)
    : console.log(
        `Server started at port ${config.getSection("development").port}`
      );
});
