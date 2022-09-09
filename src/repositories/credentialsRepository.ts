import client from "../dbStrategy/database";
import { INewCredential } from "../types/CredentialTypes";

export async function insertNewCredential(credential: INewCredential) {
  return client.credentials.create({
    data: credential,
  });
}

export async function findCredentialByTitleAndUserId(
  userId: number,
  title: string
) {
  return client.credentials.findFirst({
    where: { userId, title },
  });
}

export async function findCredentialByIdAndUserId(
  userId: number,
  credentialId: number
) {
  return client.credentials.findFirst({
    where: { id: credentialId, userId },
  });
}

export async function findAllCredentials(userId: number) {
  return client.credentials.findMany({
    where: { userId },
  });
}

export async function deleteCredential(id: number) {
  return client.credentials.delete({
    where: { id },
  });
}
