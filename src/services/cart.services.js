import cartsDao from "../persistencia/DAOs/carts.dao.js";

export const emptyCart = async (id) => {
  try {
    return await cartsDao.emptyCart(id);
  } catch (error) {
    throw error;
  }
};

export const addProduct = async (id, product) => {
  try {
    return await cartsDao.addProduct(id, product);
  } catch (error) {
    throw error;
  }
};

export const getCart = async (id) => {
  try {
    return await cartsDao.findById(id);
  } catch (error) {
    throw error;
  }
};

export const deleteCart = async (id) => {
  try {
    return await cartsDao.deleteById(id);
  } catch (error) {
    throw error;
  }
};

export const getCarts = async () => {
  try {
    return await cartsDao.findAll();
  } catch (error) {
    throw error;
  }
};

export const createCart = async (cart) => {
  try {
    return await cartsDao.create(cart);
  } catch (error) {
    throw error;
  }
};
