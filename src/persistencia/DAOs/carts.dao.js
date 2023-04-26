import baseDao from "./baseDao.js";
import { cartsModel } from "../models/carts.model.js";

class cartsDao extends baseDao {
  constructor() {
    super(cartsModel);
  }

  async emptyCart(id) {
    try {
      const cart = await this.findById(id);
      cart.products = [];
      return await cart.save();
    } catch (error) {
      throw error;
    }
  }

  async addProduct(id, product) {
    try {
      const cart = await this.findById(id);
      cart.products.push(product);
      return await cart.save();
    } catch (error) {
      throw error;
    }
  }
}

export default new cartsDao();
