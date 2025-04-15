const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const mongooseConnection = process.env.DB_CONNECTION.replace(
  "<db_password>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(mongooseConnection)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/tasks", taskRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
