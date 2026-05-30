require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fileExplorer")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB ERROR:",err));

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server (LAST)
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});


app.post("/items", async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/items/:parentId", async (req, res) => {
  try {
    const parentId = req.params.parentId === "null" ? null : req.params.parentId;

    const items = await Item.find({ parentId });
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.put("/items/:id", async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.delete("/items/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});