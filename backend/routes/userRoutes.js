const router = require("express").Router();
// const admin = require("../middleware/admin");
// const auth = require("../middleware/auth");
// const validateObjectId = require("../middleware/validateObjectId");
const { isAuthenticated, isAdmin } = require('../middleware/auth')

const { getAllUsers, getUserByID, updateUserByID, deleteUserByID } = require("../controllers/userController");

router.route("/").get(isAuthenticated, getAllUsers);
router.route("/:id").get(isAuthenticated, getUserByID);
router.route("/:id").put(isAuthenticated, isAdmin, updateUserByID);
router.route("/:id").delete(isAuthenticated, isAdmin, deleteUserByID);

module.exports = router;
