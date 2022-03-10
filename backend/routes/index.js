import express from "express";
 
import { 
    getAllProjects,
    createProject,
    getProjectsById,
    updateProject,
    deleteProject
} from "../controllers/Products.js";
 
const router = express.Router();
 
router.get('/', getAllProjects);
router.get('/:id', getProjectsById);
router.post('/', createProject);
router.patch('/:id', updateProject);
router.delete('/:id', deleteProject);
 
export default router;