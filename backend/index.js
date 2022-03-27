import express from "express";
import db from "./config/database.js";
import projectRoutes from "./routes/index.js";
import ticketRoutes from "./routes/ticketRoutes.js"
import cors from "cors";
 
const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/ticket_table', ticketRoutes);
app.use('/bugtracker_table', projectRoutes);

 
app.listen(5002, () => console.log('Server running at port 5002'));