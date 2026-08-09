const { loginController, registerController, profileController } = require("../controller/auth.controller")
const authMiddleware = require("../middleware/authMiddlware")
const router = require("express").Router()



router.post("/login",loginController)
router.post("/register",registerController)
router.get("/me",authMiddleware,profileController)

module.exports = router