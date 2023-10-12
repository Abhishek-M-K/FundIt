const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: {
    type: String,
    required: true,
    lowercase: true,
  },
  logo: [String],
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  equity: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
});

const ProjectModel = mongoose.model("Project", projectSchema);
module.exports = ProjectModel;
