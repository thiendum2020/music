const router = require("express").Router();
const { Song } = require("../models/songModel");
const { PlayList } = require("../models/playlistModel");
const { Artist } = require("../models/artistModel");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
    const search = req.query.search;
    if (search !== "") {
        const songs = await Song.find({
            name: { $regex: search, $options: "i" },
        }).limit(10);

        const playlists = await PlayList.find({
            name: { $regex: search, $options: "i" },
        }).limit(10);

        const artists = await Artist.find({
            name: { $regex: search, $options: "i" },
        }).limit(10);

        const result = { songs, playlists, artists };
        res.status(200).send(result);
    } else {
        res.status(200).send({});
    }
});

module.exports = router;
