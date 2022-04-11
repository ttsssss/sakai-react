import express from "express";

import { getAllTickets, createTicket, getTicketsById, updateTicket, deleteTicket } from "../controllers/Products2.js";

const router = express.Router();


router.get("/", getAllTickets);
router.get("/:ticket_id", getTicketsById);
router.post("/", createTicket);
router.patch("/:ticket_id", updateTicket);
router.delete("/:ticket_id", deleteTicket);

export default router;
