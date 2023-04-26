import ticketsDao from "../persistencia/DAOs/tickets.dao";

export const getTickets = async () => {
  try {
    return ticketsDao.findAll();
  } catch (error) {
    throw error;
  }
};

export const getTicketById = async (id) => {
  try {
    return ticketsDao.findById(id);
  } catch (error) {
    throw error;
  }
};

export const createTicket = async (ticket) => {
  try {
    return ticketsDao.create(ticket);
  } catch (error) {
    throw error;
  }
};

export const updateTicket = async (id, ticket) => {
  try {
    return ticketsDao.update(id, ticket);
  } catch (error) {
    throw error;
  }
};
