import app from "./app";
import databaseConnection from "./db/db-connection";

const PORT: number = 4000;

export const server = () =>
  databaseConnection
    .then(() =>
      app.listen(PORT, () => {
        console.log("Server started on localhost:4000");
      })
    )
    .catch(console.error);

server();
