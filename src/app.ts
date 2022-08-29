import { Application } from "express";
import express from "express";
import db from "./models";

interface IAppInit {
  port: number;
  middleWares: any;
  controllers: any;
}

class App {
  public app: Application;
  public port: number;

  constructor(appInit: IAppInit) {
    this.app = express();

    this.app.use(express.json())

    this.port = appInit.port;

    this.middlewares(appInit.middleWares)
    this.routes(appInit.controllers)
    this.assets()
  }

  private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
    middleWares.forEach(middleWare => {
        this.app.use(middleWare)
    })
  }

  private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
    controllers.forEach(controller => {
        this.app.use('/', controller.router)
    })
  }

  private assets() {
    this.app.use(express.static('public'))
    this.app.use(express.static('views'))
  }

  public async start() {
    await db.sequelize.sync();
    this.app.listen(this.port, () => {
        console.log(`App listening on the http://localhost:${this.port}`)
    })
  }
}

export default App;