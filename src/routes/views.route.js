import { Router } from "express";
import { renderProducts } from "../controllers/products.controller.js";
import { jwtValidator } from "../middlewares/jwt.middlewares.js";

const router = Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/", jwtValidator, renderProducts);

export default router;
