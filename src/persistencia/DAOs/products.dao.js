import baseDao from "./baseDao.js";
import { productsModel } from "../models/products.model.js";

class productsDao extends baseDao {
  constructor() {
    super(productsModel);
  }
}

export default new productsDao();
