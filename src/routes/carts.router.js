import { Router } from "express";
import {
  addCartController,
  editCartController,
  editProductQtyController,
  emptyCartController,
  getCartByIdController,
  getCartsController,
  addProductToCartController,
  deleteProductFromCartController,
  completeSaleController,
} from "../controllers/carts.controller.js";
import { verificarUsuarioClient } from "../middlewares/auth.js";

const router = Router();

router.post("/", addCartController);

router.get("/", getCartsController);

router.get("/:cid", getCartByIdController);

router.post("/:cid/product/:pid", addProductToCartController);

router.delete("/:cid/product/:pid", deleteProductFromCartController);

router.delete("/:cid", emptyCartController);

router.put("/:cid/product/:pid/:qty", editProductQtyController);

router.put("/:cid", editCartController);

router.post("/:cid/purchase", completeSaleController);

export default router;
