require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const connection = require("./db");

const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/users");
// const songRoutes = require("./routes/songs");
// const playListRoutes = require("./routes/playLists");
// const searchRoutes = require("./routes/search");
const app = express();

connection();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
// app.use("/api/users/", userRoutes);
// app.use("/api/songs/", songRoutes);
// app.use("/api/playlists/", playListRoutes);
// app.use("/api/", searchRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
