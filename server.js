const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const analyzerRoutes = require("./routes/analyzer");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/skillgap")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/analyze", analyzerRoutes);

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});