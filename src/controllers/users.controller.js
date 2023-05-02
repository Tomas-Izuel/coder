import { addProduct } from "../services/cart.services";
import { createCart } from "../services/cart.services";
import { editUser } from "../services/users.services";
import jwt from "jsonwebtoken";

export const addProductToUserCartController = async (req, res) => {
  const user = req.cookies.user;
  if (!user.cartId) {
    try {
      const cartId = await createCart()
      user.cartId = cartId;
      const editedUser = await editUser(user.id, user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  try {
    const product = req.body;
    const updatedCart = await addProduct(id, product);
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
