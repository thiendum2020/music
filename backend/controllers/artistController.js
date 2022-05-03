const { Artist, validate } = require("../models/artistModel");
const { Song } = require("../models/songModel");

// Get all artists        GET/api/artists
exports.getAllArtists = async (req, res) => {
    const artists = await Artist.find();
    res.status(200).send({
        data: artists,
        message: "Get all artists successfully",
    });
};

// Get artist by id       GET/api/artists/:id
exports.getArtistByID = async (req, res) => {
    const artist = await Artist.findById(req.params.id);
    const songsBySinger = await Song.find({ singer: artist._id });
    const songsByComposer = await Song.find({ composer: artist._id });
    res.status(200).send({
        data: {
            artist,
            songsBySinger,
            songsByComposer,
        },
        message: "Get artist by id successfully",
    });
};

// Create artist      POST/api/artists
exports.createArtist = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const artist = await Artist(req.body).save();
    res.status(201).send({
        data: artist,
        message: "The artist has been created successfully",
    });
};

// Update artist by id        PUT/api/artists/:id
exports.updateArtistByID = async (req, res) => {
    const user = await Artist.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).send({
        data: user,
        message: "Artist profile updated successfully",
    });
};

// Delete artist by id        DELETE/api/artists/:id
exports.deleteArtistByID = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Artist deleted successfully" });
};
