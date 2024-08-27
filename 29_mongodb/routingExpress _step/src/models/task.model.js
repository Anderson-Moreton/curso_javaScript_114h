const mongoose = require("mongoose")

const taksSchema = new mongoose.Schema({
    title:  {type: String, required: true, trim: true, maxlength: 150 },
    completed: { type: Boolean, default: false },
    // completedAt: { type: Date, default: Date.now() },
    createdAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, required: false },
    userId: { type: String, required: true, trim: true }
})

modeule.exports = mongoose.model("Taks", taksSchema)