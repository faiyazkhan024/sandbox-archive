require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const rootRoute = require("./routes/root");
const itemRoutes = require("./routes/item");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.static("public"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(rootRoute);
app.use("/item", itemRoutes);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
