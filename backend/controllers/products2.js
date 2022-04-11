import Project2 from "../models/productModel2.js";
 
export const getAllTickets = async (req, res) => {
    try {
        const projects = await Project2.findAll();
        res.json(projects);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getTicketsById = async (req, res) => {
    try {
        const project = await Project2.findAll({
            where: {
                ticket_id: req.params.ticket_id
            }
        });
        res.json(project[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createTicket = async (req, res) => {
    try {
        await Project2.create(req.body);
        res.json({
            "message": "Project Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateTicket = async (req, res) => {
    try {
        await Project2.update(req.body, {
            where: {
                ticket_id: req.params.ticket_id
            }
        });
        res.json({
            "message": "Project Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteTicket = async (req, res) => {
    try {
        await Project2.destroy({
            where: {
                ticket_id: req.params.ticket_id
            }
        });
        res.json({
            "message": "Project Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

