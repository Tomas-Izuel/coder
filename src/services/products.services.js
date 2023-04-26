import productsDao from "../persistencia/DAOs/products.dao.js";

export const getProducts = async () => {
  try {
    return productsDao.findAll();
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    return productsDao.findById(id);
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    return productsDao.create(product);
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    return productsDao.update(id, product);
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    return productsDao.deleteById(id);
  } catch (error) {
    throw error;
  }
};
