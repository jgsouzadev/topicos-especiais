import { Sequelize } from 'sequelize';
import db from '../db.js'

const Professor = db.define('professor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
 
export default Professor;