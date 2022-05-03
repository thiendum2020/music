const router = require("express").Router();
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");

const { getAllUsers, getUserByID, updateUserByID, deleteUserByID } = require("../controllers/userController");

router.route("/").get(admin, getAllUsers);
router.route("/:id").get(auth, getUserByID);
router.route("/:id").put([validateObjectId, admin], updateUserByID);
router.route("/:id").delete([validateObjectId, admin], deleteUserByID);

module.exports = router;
