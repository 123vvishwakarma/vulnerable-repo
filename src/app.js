const express = require("express");
const cors = require("cors");
const securityRoutes = require("./routes/securityRoutes");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api", securityRoutes);

app.get("/", (req, res) => {
  res.json({
    name: "vulnerable-backend",
    purpose: "Scanner demonstration only. Do not deploy.",
  });
});

module.exports = app;
