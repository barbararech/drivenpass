import client from "../dbStrategy/database";
import * as CredentialTypes from "../types/CredentialTypes";

export async function insertNewCredential(
  credential: CredentialTypes.NewCredential
) {
  return client.credentials.create({
    data: credential,
  });
}

export async function findCredentialByTitle(userId: number, title: string) {
  return client.credentials.findFirst({
    where: { userId, title },
  });
}
