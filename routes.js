const express = require("express");
const router = express.Router();

const users = require("./users");
const { analyzeSkills } = require("./analyzer");

// REGISTER
router.post("/register", (req, res) => {
  const { email, password } = req.body;

  users.push({ email, password, skills: [] });

  res.json({ message: "User registered" });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user });
});

// ANALYZE
router.post("/analyze", (req, res) => {
  const { userSkills, requiredSkills } = req.body;

  const result = analyzeSkills(userSkills, requiredSkills);

  res.json(result);
});

module.exports = router;