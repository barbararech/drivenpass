import { Request, Response } from "express";
import * as credentialsService from "../services/credentialsServices";
import * as CredentialTypes from "../types/CredentialTypes";

export async function newCredential(req: Request, res: Response) {
  const userId: number = res.locals.id;
  const credential: CredentialTypes.INewCredential = req.body;

  await credentialsService.newCredential(userId, credential);

  return res.status(200).send("Credential created successfully!");
}

export async function viewAllCredentials(req: Request, res: Response) {
  const userId: number = res.locals.id;

  const credentials = await credentialsService.viewAllCredentials(userId);

  return res.status(200).send(credentials);
}

export async function viewCredentialById(req: Request, res: Response) {
  const userId: number = res.locals.id;
  const credentialId: number = Number(req.params.id);

  const credential = await credentialsService.viewCredentialById(
    userId,
    credentialId
  );

  return res.status(200).send(credential);
}

export async function deleteCredential(req: Request, res: Response) {
  const userId: number = res.locals.id;
  const credentialId: number = Number(req.params.id);

  await credentialsService.deleteCredential(
    userId,
    credentialId
  );

  return res.status(200).send("Credential successfully deleted");
}