import { Router } from "express";
import {
  addProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  updateProductController,
  mockedProductsController,
} from "../controllers/products.controller.js";
import { verificarUsuarioAdmin } from "../middlewares/auth.js";

const router = Router();

router.get("/", getProductsController);

router.get("/mockingproducts", mockedProductsController);

router.get("/:pid", getProductByIdController);

router.post("/", addProductController);

router.put("/:pid", verificarUsuarioAdmin, updateProductController);

router.delete("/:pid", verificarUsuarioAdmin, deleteProductController);

export default router;
