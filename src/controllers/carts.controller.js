import {
  addProduct,
  emptyCart,
  getCart,
  getCarts,
  deleteCart,
  createCart,
} from "../services/cart.services.js";

export const getCartController = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await getCart(id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCartsController = async (req, res) => {
  try {
    const carts = await getCarts();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;
    const updatedCart = await addProduct(id, product);
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const emptyCartController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCart = await emptyCart(id);
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCartController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCart = await deleteCart(id);
    res.status(200).json(deletedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCartController = async (req, res) => {
  try {
    const cart = req.body;
    const newCart = await createCart(cart);
    res.status(200).json(newCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
