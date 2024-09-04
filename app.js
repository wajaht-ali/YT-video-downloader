const express = require("express");
const youtubeRoutes = require("./routes/yt_route.js");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// cors options
app.use(
  cors({
    origin: "https://yt-video-downloader-production.up.railway.app",
    method: ["POST", "GET", "PUT", "DELETE"],
    withCredentials: true,
  })
);
// Routes
app.use("/", (req, res) => {
  res.send("Server is running");
});
app.use("/download", youtubeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
