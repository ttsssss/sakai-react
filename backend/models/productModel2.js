import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Project2 = db.define('ticket_table',{
    ticket_title:{
        type: DataTypes.STRING
    },
    ticket_description:{
        type: DataTypes.STRING
    },
    type_menu:{
        type: DataTypes.ENUM('Issue', 'Bug', 'Error', 'Other'),
        defaultValue: 'Issue'
    },
    priority_menu:{
        type: DataTypes.ENUM('Low', 'Medium', 'High', 'Immediate'),
        defaultValue: 'Low'
    },
    status_menu:{
        type: DataTypes.ENUM('New', 'Open', 'In Progress', 'Resolved', 'Additional Info Required'),
        defaultValue: 'New'

    }
},{
    freezeTableName: true
});
 
export default Project2;