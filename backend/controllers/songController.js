const { User } = require("../models/userModel");
const { Song, validate } = require("../models/songModel");

// Create song
exports.createSong = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const song = await Song(req.body).save();
    res.status(201).send({
        data: song,
        message: "The song has been created successfully",
    });
};

// Get all songs by Admin
exports.getAllSongsByAdmin = async (req, res) => {
    const songs = await Song.find();
    res.status(200).send({
        data: songs,
        message: "Get all songs by Admin successfully",
    });
};

// Get all songs pushlished
exports.getAllSongsPublished = async (req, res) => {
    const songs = await Song.find({ pushlished: true });
    res.status(200).send({
        data: songs,
        message: "Get all songs pushlished successfully",
    });
};

// Get 1 song by id
exports.getAllSongs = async (req, res) => {
    const song = await Song.findById(req.params.id);
    res.status(200).send({
        data: song,
        message: "Get the song successfully",
    });
};

// Update song
exports.updateSongByID = async (req, res) => {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.send({
        data: song,
        message: "Updated the song successfully",
    });
};

// Delete song by ID
exports.deleteSongByID = async (req, res) => {
    await Song.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "The song deleted sucessfully" });
};

// Favorite song
exports.favoriteSong = async (req, res) => {
    let resMessage = "";
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(400).send({ message: "The song does not exist" });

    const user = await User.findById(req.user._id);
    const index = user.favourites.indexOf(song._id);

    if (index === -1) {
        user.favourites.push(song._id);
        resMessage = "Added to your favorite songs";
    } else {
        user.favourites.splice(index, 1);
        resMessage = "Removed from your favorite songs";
    }

    await user.save();
    res.status(200).send({ message: resMessage });
};

// Get favourite songs
exports.getFavouriteSongs = async (req, res) => {
    const user = await User.findById(req.user._id);
    const songs = await Song.find({ _id: user.favourites });
    res.status(200).send({
        data: songs,
        message: "Get favourite songs successfully",
    });
};
