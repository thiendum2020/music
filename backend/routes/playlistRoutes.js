const router = require("express").Router();
// const admin = require("../middleware/admin");
// const auth = require("../middleware/auth");
// const validateObjectId = require("../middleware/validateObjectId");
const { isAuthenticated, isAdmin } = require('../middleware/auth')

const {
    getAllPlaylists,
    getAllPlaylistsByUserID,
    getPlaylistById,
    createPlaylist,
    updatePlaylistByID,
    deletePlaylistByID,
    addSongToPlaylist,
    removeSongFromPlaylist,
} = require("../controllers/playlistController");

router.route("/").get(isAuthenticated, getAllPlaylists);
router.route("/user-playlist/getAll").get(isAuthenticated, getAllPlaylistsByUserID);
router.route("/:id").get(isAuthenticated, getPlaylistById);
router.route("/").post(isAuthenticated, createPlaylist);
router.route("/:id").put(isAuthenticated, isAdmin, updatePlaylistByID);
router.route("/:id").delete(isAuthenticated, isAdmin, deletePlaylistByID);
router.route("/song/add").put(isAuthenticated, addSongToPlaylist);
router.route("/song/remove").put(isAuthenticated, removeSongFromPlaylist);

// router.route("/").get(getAllPlaylists);
// router.route("/user-playlist/getAll").get(getAllPlaylistsByUserID);
// router.route("/:id").get(validateObjectId, getPlaylistById);
// router.route("/").post(auth, createPlaylist);
// router.route("/:id").put([validateObjectId, admin], updatePlaylistByID);
// router.route("/:id").delete([validateObjectId, admin], deletePlaylistByID);
// router.route("/song/add").put(auth, addSongToPlaylist);
// router.route("/song/remove").put(auth, removeSongFromPlaylist);

module.exports = router;
