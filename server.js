const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contactRoutes");
const connectDB = require("./config/db");

require("dotenv").config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
