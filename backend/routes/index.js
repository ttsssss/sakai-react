import express from "express";

import { getAllProjects, createProject, getProjectsById, updateProject, deleteProject } from "../controllers/Products.js";
// import { getAllTickets, createTicket, getTicketsById, updateTicket, deleteTicket } from "../controllers/Products2.js";


const router = express.Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectsById);
router.post("/", createProject);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);

// router.get("/projects", getAllTickets);
// router.get("/projects/:id", getTicketsById);
// router.post("/projects", createTicket);
// router.patch("/projects/:id", updateTicket);
// router.delete("/projects/:id", deleteTicket);



export default router;
