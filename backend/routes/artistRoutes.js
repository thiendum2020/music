const router = require("express").Router();
// const admin = require("../middleware/admin");
// const auth = require("../middleware/auth");
// const validateObjectId = require("../middleware/validateObjectId");
const { isAuthenticated, isAdmin } = require('../middleware/auth')

const {
    getAllArtists,
    getArtistByID,
    createArtist,
    updateArtistByID,
    deleteArtistByID,
    getAllSingers,
    getAllComposers,
    followArtistByID,
} = require("../controllers/artistController");

router.route("/").get(isAuthenticated, getAllArtists);
router.route("/singer/getAll").get(isAuthenticated, getAllSingers);
router.route("/composer/getAll").get(isAuthenticated, getAllComposers);
router.route("/:id").get(isAuthenticated, getArtistByID);
router.route("/").post(isAuthenticated, isAdmin, createArtist);
router.route("/:id").put(isAuthenticated, isAdmin, updateArtistByID);
router.route("/follow/:id").put(isAuthenticated, followArtistByID);
router.route("/:id").delete(isAuthenticated, isAdmin, deleteArtistByID);

// router.route("/").get(getAllArtists);
// router.route("/singer/getAll").get(getAllSingers);
// router.route("/composer/getAll").get(getAllComposers);
// router.route("/:id").get(validateObjectId, getArtistByID);
// router.route("/").post(admin, createArtist);
// router.route("/:id").put([validateObjectId, admin], updateArtistByID);
// router.route("/follow/:id").put([validateObjectId, auth], followArtistByID);
// router.route("/:id").delete([validateObjectId, admin], deleteArtistByID);

module.exports = router;
