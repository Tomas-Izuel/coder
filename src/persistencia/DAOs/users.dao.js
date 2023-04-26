import baseDao from "./baseDao.js";
import { userModel } from "../models/users.model.js";

class usersDao extends baseDao {
  constructor() {
    super(userModel);
  }
  async getByEmail(email) {
    try {
      return userModel.findOne({ email: email });
    } catch (error) {
      throw error;
    }
  }
}

export default new usersDao();
