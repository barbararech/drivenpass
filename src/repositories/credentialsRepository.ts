import client from "../dbStrategy/database";
import { INewCredential } from "../types/CredentialTypes";

export async function insertNewCredential(credential: INewCredential) {
  return client.credentials.create({
    data: credential,
  });
}

export async function findCredentialByTitle(userId: number, title: string) {
  return client.credentials.findFirst({
    where: { userId, title },
  });
}

export async function findAllCredentials(userId: number) {
  return client.credentials.findMany({
    where: { userId },
  });
}
