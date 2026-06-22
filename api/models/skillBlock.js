const mongoose = require("mongoose")

const SkillItemSchema = new mongoose.Schema({ name: String, level: Number }, { _id: false })

const SkillBlockSchema = new mongoose.Schema({
  id: { type: String, enum: ["B1", "B2", "B3"], required: true, unique: true },
  code: String,
  title: String,
  description: String,
  items: [SkillItemSchema],
})

module.exports = mongoose.model("SkillBlock", SkillBlockSchema)
