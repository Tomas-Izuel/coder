import {
  addCartService,
  getCartsService,
  getCartByIdService,
  addProductToCartService,
  deleteProductFromCartService,
  emptyCartService,
  editProductQtyService,
  editCartService,
  completeSaleService,
} from "../services/carts.services.js";

export const addCartController = async (req, res) => {
  try {
    const cart = req.body;
    const addedCart = await addCartService(cart);
    res.json({ message: addedCart });
  } catch (error) {
    console.log("Error desde el controller: ", error);
  }
};

export const getCartsController = async (req, res) => {
  try {
    const carts = await getCartsService();
    res.json({ message: carts });
  } catch (error) {
    console.log("Error desde el controller: ", error);
  }
};

export const getCartByIdController = async (req, res) => {
  try {
    const cid = req.params.cid;
    const cartFoundById = await getCartByIdService(cid);

    res.json({ message: cartFoundById });
  } catch (error) {
    console.log("Error desde el controller: ", error);
  }
};

export const addProductToCartController = async (req, res) => {
  try {
    const cid = req.params.cid;
    const pid = req.params.pid;
    const addedProduct = await addProductToCartService(cid, pid);
    res.json({
      message: addedProduct,
    });
  } catch (error) {
    console.log("Error desde el controller: ", error);
  }
};

export const deleteProductFromCartController = async (req, res) => {
  try {
    const cid = req.params.cid;
    const pid = req.params.pid;
    const deletedProduct = await deleteProductFromCartService(cid, pid);
    res.json({
      message: deletedProduct,
    });
  } catch (error) {
    console.log("Error desde el controller: ", error);
  }
};

export const emptyCartController = async (req, res) => {
  try {
    const cid = req.params.cid;
    const emptyCart = await emptyCartService(cid);
    res.json({ message: emptyCart });
  } catch (error) {
    console.log("Error desde el controller: ", error);
  }
};

export const editProductQtyController = async (req, res) => {
  try {
    const cid = req.params.cid;
    const pid = req.params.pid;
    const quantity = parseInt(req.params.qty);
    const editedProductQty = await editProductQtyService(cid, pid, quantity);
    res.json({ message: editedProductQty });
  } catch (error) {
    console.log("Error desde el controller: ", error);
  }
};

export const editCartController = async (req, res) => {
  try {
    const cid = req.params.cid;
    const newCart = req.body.cart;
    const editedCart = await editCartService(cid, newCart);
    res.json({ message: editedCart });
  } catch (error) {
    console.log("Error desde el controller: ", error);
  }
};

export const completeSaleController = async (req, res) => {
  try {
    const buyer = req.user;
    const cid = req.params.cid;
    const resultCart = await completeSaleService(cid, buyer.full_name);

    res.json({ message: resultCart });
  } catch (error) {
    console.log("Error desde el controller: ", error);
  }
};
