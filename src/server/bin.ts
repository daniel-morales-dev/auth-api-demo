import morgan from "morgan";
import { ConnectionOptionsReader, createConnections } from "typeorm";
import app from "../app";
import { LOG_FORMAT } from "../constants/envinronments.constant"
import { ConnectionOptions } from "typeorm/connection/ConnectionOptions";

export default class Server {
  public port: number;

  constructor(port: number) {
    this.port = port;
  }
  static init(port: number) {
    return new Server(port);
  }
  start(callback: () => void) {
    this.connect().then(() => {
      app.use(morgan(LOG_FORMAT))
      app.listen(this.port, callback);
    })
      .catch((err) => console.error(err));
  }
  private async connect() {
    const typeOrmConfig: ConnectionOptionsReader = new ConnectionOptionsReader();
    const connectionOptions: ConnectionOptions[] = await typeOrmConfig.all();
    return createConnections(connectionOptions);
  }
}