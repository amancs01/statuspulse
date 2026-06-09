const express = require("express");

const app = express();

app.get("/api/health", (req, res) => {
  res.json({
    message: "StatusPulse API is running",
  });
});

app.get("/api/about", (req, res) => {
  res.json({
    appName: "StatusPulse",
    purpose: "Monitor websites and APIs",
    version: "1.0.0",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

