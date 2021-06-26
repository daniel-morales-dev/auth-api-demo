import { Container } from "typedi"
import Server from "./server/bin";

export const server = Server.init((process.env.PORT as unknown) as number);

server.start(async () => {
  console.info(`Server is running at PORT: ${process.env.PORT}`)
})