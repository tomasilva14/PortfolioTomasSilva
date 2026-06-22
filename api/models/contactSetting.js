const mongoose = require("mongoose")

const ContactSettingSchema = new mongoose.Schema({
  directEmail: String,
})

module.exports = mongoose.model("ContactSetting", ContactSettingSchema)
