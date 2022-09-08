import { Request, Response } from "express";
import * as credentialsService from "../services/credentialsServices";

export async function newCredential(req: Request, res: Response) {
  const { id } = res.locals;
  const credential = req.body;

  await credentialsService.newCredential(id, credential);

  return res.status(200).send("Credential created successfully!");
}
