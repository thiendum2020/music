const router = require("express").Router();
// const admin = require("../middleware/admin");
// const auth = require("../middleware/auth");
// const validateObjectId = require("../middleware/validateObjectId");
const { isAuthenticated, isAdmin } = require('../middleware/auth')

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

router.route("/published/get").get(isAuthenticated, getAllSongsPublished);
router.route("/by-admin/get").get(isAuthenticated, isAdmin, getAllSongsByAdmin);
router.route("/:id").get(isAuthenticated, getSongByID);
router.route("/").post(isAuthenticated, isAdmin, createSong);
router.route("/:id").put(isAuthenticated, isAdmin, updateSongByID);
router.route("/:id").delete(isAuthenticated, isAdmin, deleteSongByID);
router.route("/favourite/get").get(isAuthenticated, getFavouriteSongs);
router.route("/favourite/:id").put(isAuthenticated, favoriteSong);

// router.route("/published/get").get(getAllSongsPublished);
// router.route("/by-admin/get").get(admin, getAllSongsByAdmin);
// router.route("/:id").get(validateObjectId, getSongByID);
// router.route("/").post(admin, createSong);
// router.route("/:id").put([validateObjectId, admin], updateSongByID);
// router.route("/:id").delete([validateObjectId, admin], deleteSongByID);
// router.route("/favourite/get").get(getFavouriteSongs);
// router.route("/favourite/:id").put(auth, favoriteSong);

module.exports = router;
