// Using Express
const express = require("express");

// app
const app = express();

// Port 80 ...
const port = 80;
app.listen(port, () => {
  console.log(`App is running on port ${port} `);
});
