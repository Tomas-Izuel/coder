import { Router } from "express";
import {
  getCartController,
  getCartsController,
  emptyCartController,
  addProductController,
  deleteCartController,
  createCartController,
} from "../controllers/carts.controller.js";
import { jwtValidator } from "../middlewares/jwt.middlewares.js";
import { isAdmin } from "../middlewares/access.middleware.js";

const router = Router();

router.get("/", jwtValidator, isAdmin, getCartsController);

router.get("/:id", jwtValidator, getCartController);

router.post("/:id/productos", jwtValidator, addProductController);

router.delete("/:id/productos", jwtValidator, emptyCartController);

router.delete("/:id", jwtValidator, isAdmin, deleteCartController);

router.post("/", jwtValidator, createCartController);

export default router;
