import "reflect-metadata";
import { createConnection, Connection } from "typeorm";

const databaseConnection: Promise<Connection> = createConnection();

export default databaseConnection;
