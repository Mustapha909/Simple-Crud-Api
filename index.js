const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://mustaphanoori78:RgwmpRis4S8KM6OO@cluster0.d5ecifu.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to database!"))
  .catch(() => {
    console.log("Connection Failed!");
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
