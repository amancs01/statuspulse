const express = require("express");

const app = express();

app.get("/api/health", (req, res) => {
  res.json({
    message: "StatusPulse API is running",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});