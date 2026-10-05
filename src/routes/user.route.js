import express from "express";
import { userController, userLoginController } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = express.Router();

router.get("/", userController);
router.post("/login", userLoginController)

router.post("/register", upload.single("avatar"), (req, res) => {
    res.send("Image and user registered successfully!");
})



export default router;