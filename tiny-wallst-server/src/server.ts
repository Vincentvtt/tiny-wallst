import { Server } from "http";
import app from "./app";
import { SERVER_PORT } from "./constants";
import databaseConnection from "./db/db-connection";

export const server = (): Promise<void | Server> =>
  databaseConnection
    .then(() =>
      app.listen(SERVER_PORT, () => {
        console.log("Server started on localhost:4000");
      })
    )
    .catch(console.error);

server();
