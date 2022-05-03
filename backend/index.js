require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const connection = require("./db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const songRoutes = require("./routes/songRoutes");
const artistRoutes = require("./routes/artistRoutes");
const playListRoutes = require("./routes/playlistRoutes");
const searchRoutes = require("./routes/searchRoutes");
const app = express();

connection();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/artists", artistRoutes);
app.use("/api/playlists/", playListRoutes);
app.use("/api/search", searchRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
