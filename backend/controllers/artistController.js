const { Artist, validate } = require("../models/artistModel");
const { Song } = require("../models/songModel");
const { User } = require("../models/userModel");

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
    if (!artist) return res.status(404).send({ message: "Artist not found" });

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
    const artist = await Artist.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).send({
        data: artist,
        message: "Artist profile updated successfully",
    });
};

// Delete artist by id        DELETE/api/artists/:id
exports.deleteArtistByID = async (req, res) => {
    await Artist.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Artist deleted successfully" });
};

// Get all singers        GET/api/artists/singer/getAll
exports.getAllSingers = async (req, res) => {
    const singers = await Artist.find({ isSinger: true });
    res.status(200).send({
        data: singers,
        message: "Get all singers successfully",
    });
};

// Get all composers        GET/api/artists/composer/getAll
exports.getAllComposers = async (req, res) => {
    const composers = await Artist.find({ isComposer: true });
    res.status(200).send({
        data: composers,
        message: "Get all composers successfully",
    });
};

// User follow/unfollow artist by id        PUT/api/artists/follow/:id
exports.followArtistByID = async (req, res) => {
    let resMessage = "";
    const artist = await Artist.findById(req.params.id);
    if (!artist) return res.status(400).send({ message: "Artist does not exist" });

    const user = await User.findById(req.user._id);
    const index = user.following.indexOf(artist._id);

    if (index === -1) {
        user.following.push(artist._id);
        artist.followers++;
        resMessage = "Added to your artists following";
    } else {
        user.following.splice(index, 1);
        if (artist.followers > 0) {
            artist.followers--;
            resMessage = "Removed from your artists following";
        } else resMessage = "Followers of artist not less than 0";
    }

    await user.save();
    await artist.save();
    res.status(200).send({ message: resMessage });
};