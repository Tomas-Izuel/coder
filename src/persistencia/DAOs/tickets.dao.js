import baseDao from "./baseDao.js";
import { ticketModel } from "../models/tickets.model.js";

class ticketsDao extends baseDao {
  constructor() {
    super(ticketModel);
  }
}

export default new ticketsDao();
