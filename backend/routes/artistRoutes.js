const router = require("express").Router();
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");

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

// router.route("/").get(auth, getAllArtists);
// router.route("/singer/getAll").get(auth, getAllSingers);
// router.route("/composer/getAll").get(auth, getAllComposers);
// router.route("/:id").get([validateObjectId, auth], getArtistByID);
// router.route("/").post(admin, createArtist);
// router.route("/:id").put([validateObjectId, admin], updateArtistByID);
// router.route("/follow/:id").put([validateObjectId, auth], followArtistByID);
// router.route("/:id").delete([validateObjectId, admin], deleteArtistByID);

router.route("/").get(getAllArtists);
router.route("/singer/getAll").get(getAllSingers);
router.route("/composer/getAll").get(getAllComposers);
router.route("/:id").get(validateObjectId, getArtistByID);
router.route("/").post(admin, createArtist);
router.route("/:id").put([validateObjectId, admin], updateArtistByID);
router.route("/follow/:id").put([validateObjectId, auth], followArtistByID);
router.route("/:id").delete([validateObjectId, admin], deleteArtistByID);

module.exports = router;
