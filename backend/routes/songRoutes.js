const router = require("express").Router();
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");

const {
    createSong,
    getSongByID,
    getAllSongsByAdmin,
    getFavouriteSongs,
    getAllSongsPublished,
    favoriteSong,
    updateSongByID,
    deleteSongByID,
} = require("../controllers/songController");

router.route("/published/get").get(auth, getAllSongsPublished);
router.route("/by-admin/get").get(admin, getAllSongsByAdmin);
router.route("/:id").get([validateObjectId, auth], getSongByID);
router.route("/").post(admin, createSong);
router.route("/:id").put([validateObjectId, admin], updateSongByID);
router.route("/:id").delete([validateObjectId, admin], deleteSongByID);
router.route("/favourite/get").get(auth, getFavouriteSongs);
router.route("/favourite/:id").put([auth, admin], favoriteSong);

module.exports = router;
