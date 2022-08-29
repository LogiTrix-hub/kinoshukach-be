import express, { Request, Response } from "express";
import db from "../models";

export class UserController {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post('/persons', this.create);
    this.router.get('/persons/:id', this.getOne);
    this.router.get('/persons', this.getAll);
    this.router.patch('/persons/:id', this.update);
    this.router.delete('/persons/:id', this.delete);
  }

  private async getAll(_: Request, res: Response) {
    try {
      const response = await db.model.User.findAll();
      res.send(response);
    } catch(e) {
      res.status(500).json(e)
    }
  }

  private async getOne(req: Request, res: Response) {
    try {
      const response = await db.model.User.findAll({
        where: {
          person_id: req.params.id
        }
      });
      res.send(response);
    } catch(e) {
      res.status(500).json(e)
    }
  }

  private async create(req: Request, res: Response) {
    try {
      const response = await db.model.User.create(req.body);
      console.log(response.toJSON());

      res.send(response.toJSON());
    } catch(e) {
      res.status(500).json(e)
    }
  }

  private async update(req: Request, res: Response) {
    try {
      const response = await db.model.User.update(req.body, {
        where: {
          person_id: req.params.id
        }
      });
      res.send(response);
    } catch(e) {
      res.status(500).json(e)
    }
  }

  private async delete(req: Request, res: Response) {
    try {
      const response = await db.model.User.destroy({
        where: {
          person_id: req.params.id
        }
      });
      res.json(response)
    } catch(e) {
      res.status(500).json(e)
    }
  }
}