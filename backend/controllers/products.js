import Project from "../models/productModel.js";
 
export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(projects);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getProjectsById = async (req, res) => {
    try {
        const project = await Project.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(project[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createProject = async (req, res) => {
    try {
        await Project.create(req.body);
        res.json({
            "message": "Project Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateProject = async (req, res) => {
    try {
        await Project.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Project Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteProject = async (req, res) => {
    try {
        await Project.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Project Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}