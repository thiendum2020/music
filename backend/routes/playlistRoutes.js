const router = require("express").Router();
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");

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

router.route("/").get(auth, getAllPlaylists);
router.route("/user-playlist/getAll").get(auth, getAllPlaylistsByUserID);
router.route("/:id").get([validateObjectId, auth], getPlaylistById);
router.route("/").post(auth, createPlaylist);
router.route("/:id").put([validateObjectId, admin], updatePlaylistByID);
router.route("/:id").delete([validateObjectId, admin], deletePlaylistByID);
router.route("/song/add").put(auth, addSongToPlaylist);
router.route("/song/remove").put(auth, removeSongFromPlaylist);

module.exports = router;
