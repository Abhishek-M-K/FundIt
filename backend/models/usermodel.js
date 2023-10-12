const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserScheme = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  LinkedIn: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const UserModel = mongoose.model("User", UserScheme);

module.exports = UserModel;
