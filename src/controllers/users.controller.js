import { addProduct } from "../services/cart.services";
import { createCart } from "../services/cart.services";
import jwt from "jsonwebtoken";

export const addProductToUserCartController = async (req, res) => {
  const user = req.cookies.user;
  console.log(token.user._id);
  try {
    const { id } = req.params;
    const product = req.body;
    const updatedCart = await addProduct(id, product);
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
