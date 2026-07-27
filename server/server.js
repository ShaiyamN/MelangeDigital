const express = require("express");
const cors = require("cors");
const pkg = require("body-parser");
require('dotenv').config()
// import careerRoutes from "./careerForm.js"; 
const addUserToLeads = require("./route/addUserToLeads");
const addUserToLeadsFromPerfomance = require("./route/addUserToLeadsFromPerfomance");
// const getAccessToken = require("./controller/lead");
const { urlencoded, json } = pkg;



const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.json());

// Subdomain routing middleware
app.use((req, res, next) => {
  const host = req.get('host');
  
  // Handle gulf subdomain - serve location/gulf content but keep subdomain URL
  if (host && host.includes('gulf.melangedigital.co')) {
    // Rewrite the URL internally to /location/gulf
    req.url = '/location/gulf';
    // Don't redirect - just rewrite internally
  }
  
  next();
});

// Use the career routes
app.use("/careers", require("./route/careerForm"));
app.use("/token-generate", addUserToLeads);

// Use the career routes
app.use("/performance-marketing", require("./route/careerForm"));
app.use("/token-generate", addUserToLeadsFromPerfomance);

app.listen(8000, () => {
  console.log("Server is running.......");
});
