import { Router } from "express";
import {
  registerController,
  loginController,
  getCurrentUserController,
} from "../controllers/auth.controller.js";
import { jwtValidator } from "../middlewares/jwt.middlewares.js";

const router = Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/current", jwtValidator, getCurrentUserController);

export default router;
