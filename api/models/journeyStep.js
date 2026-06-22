const mongoose = require("mongoose")

const JourneyStepSchema = new mongoose.Schema({
  period: String,
  title: String,
  description: String,
})

module.exports = mongoose.model("JourneyStep", JourneyStepSchema)
