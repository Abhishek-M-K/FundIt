const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const imageDownloader = require("image-downloader");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const User = require("./models/usermodel");
const Project = require("./models/projectmodel");
const fs = require("fs");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtsecret = "sameepisgay";

mongoose.connect(process.env.MONGO_URL);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.get("/ok", (req, res) => {
  res.send("everything is ok");
});

app.post("/register", async (req, res) => {
  const { name, email, LinkedIn, password } = req.body;
  try {
    const userData = await User.create({
      name,
      email,
      LinkedIn,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userData);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userData = await User.findOne({ email });

  if (!userData) {
    return res.status(404).json("User not found");
  }
  const match = bcrypt.compare(password, userData.password);
  if (!match) {
    return res.status(400).json("Invalid credentials");
  }

  const token = jwt.sign(
    { email: userData.email, id: userData._id },
    jwtsecret,
    { expiresIn: "1h" }
  );

  res
    .cookie("token", token, {
      httpOnly: true,
    })
    .json(userData);
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    // params 4
    // 1. token 2. secret salt key used for hashing 3. options {object} 4. call back func
    // we have a call back funcn for err and data of the user
    jwt.verify(token, jwtsecret, {}, (err, data) => {
      if (err) {
        return res.json(null);
      }
      res.json(data);
    });
  } else {
    res.json(null);
  }
  //res.json({ token });
});

//logout
app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

//adding logo by link
app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: __dirname + "/uploads/" + newName,
  });
  res.json(newName);
});

//adding ideas/projects
app.post("/projects", (req, res) => {
  const { token } = req.cookies;
  const { title, addedPhotos, description, amount, equity, note } = req.body;
  console.log("Received project data:", req.body);
  if (token) {
    jwt.verify(token, jwtsecret, {}, async (err, userData) => {
      if (err) {
        console.error("JWT Error:", err);
        throw err;
      }

      console.log("Creating project for user:", userData.id);

      const projectDoc = await Project.create({
        owner: userData.id,
        title,
        photos: addedPhotos,
        description,
        amount,
        equity,
        note,
      });
      console.log("Project created:", projectDoc);
      res.json(projectDoc);
    });
  } else {
    console.log("there is no token");
  }
});

app.listen(4000);

/*uploading photos
const photosMiddleware = multer({ dest: "uploads/" });
*/
