import {
  getTickets,
  getTicketById,
  createTicket,
  updateTicket,
} from "../services/tickets.services";

export const getTicketsController = async (req, res) => {
  try {
    const tickets = await getTickets();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTicketByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await getTicketById(id);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTicketController = async (req, res) => {
  try {
    const ticket = req.body;
    const newTicket = await createTicket(ticket);
    res.status(200).json(newTicket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTicketController = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = req.body;
    const updatedTicket = await updateTicket(id, ticket);
    res.status(200).json(updatedTicket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
