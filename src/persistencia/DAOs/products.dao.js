import baseDao from "./baseDao.js";
import { productsModel } from "../models/products.model.js";

class productsDao extends baseDao {
  constructor() {
    super(productsModel);
  }

  async getProductsWithStock() {
    try {
      return await this.model.find({
        stock: { $gt: 0 },
      });
    } catch (error) {
      throw error;
    }
  }
}

export default new productsDao();
