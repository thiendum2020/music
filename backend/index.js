require("dotenv").config();
require("express-async-errors");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");

const connection = require("./db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const songRoutes = require("./routes/songRoutes");
const artistRoutes = require("./routes/artistRoutes");
const playListRoutes = require("./routes/playlistRoutes");
const searchRoutes = require("./routes/searchRoutes");
const upload = require("./routes/upload");
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
    fileUpload({
        useTempFiles: true,
    }),
);
app.use(express.json());

connection();

app.use("/api", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/artists", artistRoutes);
app.use("/api/playlists/", playListRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/", upload);

// Setting up cloudinary configuration
cloudinary.config({
    cloud_name: "toryobuyall",
    api_key: "543991772329632",
    api_secret: "5W2B1kJ7r6NIq1p6-WB7vIGj0cs",
    secure: true,
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
