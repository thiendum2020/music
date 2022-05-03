const { PlayList, validate } = require("../models/playlistModel");
const { Song } = require("../models/songModel");
const { User } = require("../models/userModel");
const Joi = require("joi");

// Create playlist        POST/api/playlists
exports.createPlaylist = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const user = await User.findById(req.user._id);
    const playList = await PlayList({ ...req.body, user: user._id }).save();
    user.playlists.push(playList._id);
    await user.save();

    res.status(201).send({
        data: playList,
        message: "The playlist has been created successfully.",
    });
};

// Get all playlists        GET/api/playlists/
exports.getAllPlaylists = async (req, res) => {
    const playlists = await PlayList.find();
    res.status(200).send({
        data: playlists,
        message: "Get all playlists successfully",
    });
};

// Get playlist by id        GET/api/playlists/:id
exports.getPlaylistById = async (req, res) => {
    const playlist = await PlayList.findById(req.params.id);
    if (!playlist) return res.status(404).send("The playlist not found");

    const songs = await Song.find({ _id: playlist.songs });
    res.status(200).send({
        data: { playlist, songs },
        message: "Get the playlist successfully",
    });
};

// Update playlist by id        PUT/api/playlists/:id
exports.updatePlaylistByID = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        desc: Joi.string().allow(""),
        img: Joi.string().allow(""),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const playlist = await PlayList.findById(req.params.id);
    if (!playlist) return res.status(404).send({ message: "The playlist not found" });

    const user = await User.findById(req.user._id);
    if (!user._id.equals(playlist.user)) return res.status(403).send({ message: "User don't have access to edit!" });

    playlist.name = req.body.name;
    playlist.desc = req.body.desc;
    playlist.img = req.body.img;
    await playlist.save();

    res.status(200).send({ message: "The playlist updated successfully" });
};

// Add song to playlist        PUT/api/playlists/song/add
exports.addSongToPlaylist = async (req, res) => {
    const schema = Joi.object({
        playlistId: Joi.string().required(),
        songId: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const user = await User.findById(req.user._id);
    const playlist = await PlayList.findById(req.body.playlistId);

    if (!playlist) return res.status(404).send({ message: "The playlist not found" });
    if (!user._id.equals(playlist.user)) return res.status(403).send({ message: "User don't have access to add!" });

    const song = await Song.findById(req.body.songId);
    if (!song) return res.status(404).send({ message: "The song not found" });

    const isSong = playlist.songs.find((song) => song === req.body.songId);
    if (isSong) return res.status(403).send({ message: "The song added to the playlist" });

    if (playlist.songs.indexOf(req.body.songId) === -1) {
        playlist.songs.push(req.body.songId);
    }

    await playlist.save();
    res.status(200).send({
        data: playlist,
        message: "Added song to playlist",
    });
};

// Remove song from playlist        PUT/api/playlists/song/remove
exports.removeSongFromPlaylist = async (req, res) => {
    const schema = Joi.object({
        playlistId: Joi.string().required(),
        songId: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const user = await User.findById(req.user._id);
    const playlist = await PlayList.findById(req.body.playlistId);

    if (!playlist) return res.status(404).send({ message: "The playlist not found" });
    if (!user._id.equals(playlist.user)) return res.status(403).send({ message: "User don't have access to add!" });

    const song = await Song.findById(req.body.songId);
    if (!song) return res.status(404).send({ message: "The song not found" });

    const isSong = playlist.songs.find((song) => song === req.body.songId);
    if (!isSong) return res.status(403).send({ message: "The song does not exist in the playlist" });

    const index = playlist.songs.indexOf(req.body.songId);
    playlist.songs.splice(index, 1);

    await playlist.save();
    res.status(200).send({
        data: playlist,
        message: "Removed song from playlist",
    });
};

// Get all playlist by user id        GET/api/playlists/user-playlist/getAll
exports.getAllPlaylistsByUserID = async (req, res) => {
    const user = await User.findById(req.user._id);
    const playlists = await PlayList.find({ _id: user.playlists });
    res.status(200).send({
        data: playlists,
        message: "Get all playlists by user id successfully",
    });
};

// get random playlists
// exports.createSong = async (req, res) => {
//     const playlists = await PlayList.aggregate([{ $sample: { size: 10 } }]);
//     res.status(200).send({ data: playlists });
// };

// Delete playlist by id        DELETE/api/playlists/:id
exports.deletePlaylistByID = async (req, res) => {
    const user = await User.findById(req.user._id);
    const playlist = await PlayList.findById(req.params.id);
    if (!user._id.equals(playlist.user)) return res.status(403).send({ message: "User don't have access to delete!" });

    const index = user.playlists.indexOf(req.params.id);
    user.playlists.splice(index, 1);
    await user.save();
    await playlist.remove();

    res.status(200).send({ message: "Removed the playlist from library" });
};
