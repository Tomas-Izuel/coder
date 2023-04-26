import { Router } from "express";
import {
  getProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/products.controller.js";
import { jwtValidator } from "../middlewares/jwt.middlewares.js";
import { isAdmin } from "../middlewares/access.middleware.js";

const router = Router();

router.get("/", getProductsController);

router.get("/:id", getProductByIdController);

router.post("/", jwtValidator, isAdmin, createProductController);

router.put("/:id", jwtValidator, isAdmin, updateProductController);

router.delete("/:id", jwtValidator, isAdmin, deleteProductController);

export default router;
