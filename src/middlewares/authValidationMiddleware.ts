import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface JwtPayload {
  id: string;
}

export async function tokenValidationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    throw {
      status: 401,
      message: "Missing authorization header!",
    };
  }

  const token = authorization?.replace("Bearer ", "").trim();
  const secretKey = process.env.JWT_SECRET;

  if (!token || !secretKey) {
    throw {
      status: 401,
      message: "Unauthorized!",
    };
  }

  const { id } = jwt.verify(token, secretKey) as JwtPayload;

  res.locals.id = id;
  next();
}
