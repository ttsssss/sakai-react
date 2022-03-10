import { Sequelize } from "sequelize";
 
const db = new Sequelize('bugtracker_db', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    port: 8889,
    username: "root",
    password: "root",
});
 
export default db;