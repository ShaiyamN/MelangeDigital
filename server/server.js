const express = require("express");
const cors = require("cors");
require("dotenv").config();

const addUserToLeads = require("./route/addUserToLeads");
const addUserToLeadsFromPerfomance = require("./route/addUserToLeadsFromPerfomance");
const careerForm = require("./route/careerForm");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/careers", careerForm);
app.use("/performance-marketing", careerForm);
// Contact / lead forms (Zoho). Both handlers are mounted for historical reasons —
// prefer splitting paths when you refactor (e.g. /leads vs /leads/performance).
app.use("/token-generate", addUserToLeads);
app.use("/token-generate", addUserToLeadsFromPerfomance);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
