import App from "./app";
import { UserController } from "./controllers/user.contoller";

export const app = new App({
  port: 5000,
  controllers: [
    new UserController()
  ],
  middleWares: []
})

app.start();