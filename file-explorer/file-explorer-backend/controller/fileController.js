const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["file", "folder"], required: true },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Item", default: null },
  content: { type: String, default: null }
}, { timestamps: true });

module.exports = mongoose.model("Item", itemSchema);