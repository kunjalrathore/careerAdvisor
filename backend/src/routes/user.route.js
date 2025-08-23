// routes/authRoutes.js
import express from "express";
import { signup, login, logout } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout",authMiddleware, logout);
 
export default router;
