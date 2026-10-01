import { app } from "./src/app.js";
import express from "express";
import connectDB from "./src/config/db.js";

// Connect to the database
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});
