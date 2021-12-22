const express = require("express");
const cors = require("cors");
const server = require("./server");

const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});