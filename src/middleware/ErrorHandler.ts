import { NextFunction, Request, Response } from "express";
import HttpError from "./HttpError";

export default class ErrorHandler {
  public static handleError(error: HttpError, req: Request, res: Response, _next: NextFunction) {
    if (error.status) {
      return res.status(error.status).send({ message: error.message });
    }

    res.status(500).send({ error: error.message });
  }
}