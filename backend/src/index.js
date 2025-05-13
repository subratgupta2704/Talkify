import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";
import path from "path";

dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://talkify-ie2o.onrender.com"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Serve static files from frontend
const staticPath = path.join(__dirname, "frontend", "dist");
app.use(express.static(staticPath));

// Catch-all to serve index.html for client-side routes
app.get("*", (req, res) => {
  if (!req.url.startsWith("/api")) {
    // Prevent serving index.html for API routes
    res.sendFile(path.join(staticPath, "index.html"));
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
