require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const ENV_NAME = process.env.ENV_NAME || "UNKNOWN";
const LOG_LEVEL = process.env.LOG_LEVEL || "info";
const DB_URL = process.env.DB_URL || "no-db";

app.get("/", (req, res) => {
  res.json({
    message: `Hello from ${ENV_NAME} environment`,
    logLevel: LOG_LEVEL,
    dbUrl: DB_URL
  });
});

app.listen(PORT, () => {
  console.log(`Server running in ${ENV_NAME} on port ${PORT}`);
});
