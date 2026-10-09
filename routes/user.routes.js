import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/me", requireAuth, UserController.getMe);

export default router;
