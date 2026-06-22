const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: String,
  description: String,
  image: String,
  tags: [String],
  block: { type: String, enum: ["B1", "B2", "B3"] },
  demoUrl: String,
  codeUrl: String,
})

module.exports = mongoose.model("Project", ProjectSchema)
