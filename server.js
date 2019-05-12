// const dotenv = require("dotenv");
// dotenv.config();
const routes = require("./routes");
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || process.env.DB_URI, { useNewUrlParser: true });

server.listen(PORT, () => {
  console.log(`API server listing on port ${PORT}!`);
});