const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const colors = require("colors");
const authControllers = require('./controllers/authControllers');
const testControllers  = require('./controllers/testControllers')
const config = require('./config/config');
const router = express.Router();
const authenticateToken = require('./middleware/authentication')
require('dotenv').config();


mongoose.connect(config.mongodb.url);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api", router);

router.post("/register", authControllers.registerUser);
router.post("/login", authControllers.login);
router.get("/protected-resource", authenticateToken.authenticateToken, (req, res) => {
    res.json({ message: "Access granted to protected resource" });
});


router.get("/hello", (req, res) => {
    res.send("Hello my bro");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`.rainbow);
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB".green);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
});
