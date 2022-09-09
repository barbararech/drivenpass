import { Request, Response } from "express";
import * as credentialsService from "../services/credentialsServices";
import * as CredentialTypes from "../types/CredentialTypes";

export async function newCredential(req: Request, res: Response) {
  const { id } = res.locals;
  const credential: CredentialTypes.INewCredential = req.body;

  await credentialsService.newCredential(id, credential);

  return res.status(200).send("Credential created successfully!");
}
