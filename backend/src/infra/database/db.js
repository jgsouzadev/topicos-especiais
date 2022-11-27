import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://root:root@localhost:5432/fatec', {dialect: 'postgres'});

export default sequelize;