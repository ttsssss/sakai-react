import express from "express";

import { getAllTickets, createTicket, getTicketsById, updateTicket, deleteTicket } from "../controllers/Products2.js";

const router = express.Router();


router.get("/", getAllTickets);
router.get("/:id", getTicketsById);
router.post("/", createTicket);
router.patch("/:id", updateTicket);
router.delete("/:id", deleteTicket);

export default router;
