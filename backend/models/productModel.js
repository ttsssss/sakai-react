import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Project = db.define('bugtracker_table',{
    project_name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    }, 
    createdAt:{
        type: DataTypes.DATE
    }
},{
    freezeTableName: true
});
 
export default Project;