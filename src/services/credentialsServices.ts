import * as userService from "../services/userService";
import * as credentialsRepository from "../repositories/credentialsRepository";
import { INewCredential } from "../types/CredentialTypes";
import Cryptr from "cryptr";

export async function newCredential(
  userId: number,
  credential: INewCredential
) {
  const cryptr = new Cryptr(process.env.CRYPTR_SECRET as string);
  const encryptedPassword = cryptr.encrypt(credential.password);
  credential["password"] = encryptedPassword;

  const user = await userService.findUserById(userId);

  await findCredentialByTitle(userId, credential);

  await credentialsRepository.insertNewCredential({
    ...credential,
    userId,
  });

  return;
}

export async function viewAllCredentials(userId: number) {
  const credentials = await credentialsRepository.findAllCredentials(userId);
  const cryptr = new Cryptr(process.env.CRYPTR_SECRET as string);

  credentials.map((credential) => {
    const encryptedPassword = cryptr.decrypt(credential.password);
    credential["password"] = encryptedPassword;
  });

  return credentials;
}

export async function viewCredentialById(userId: number, credentialId: number) {
  const credential = await credentialExist(userId, credentialId);

  const cryptr = new Cryptr(process.env.CRYPTR_SECRET as string);
  const encryptedPassword = cryptr.decrypt(credential.password);
  credential["password"] = encryptedPassword;

  return credential;
}

export async function deleteCredential(userId: number, credentialId: number) {
  await credentialExist(userId, credentialId);
  await credentialsRepository.deleteCredential(credentialId);

  return;
}

export async function credentialExist(userId: number, credentialId: number) {
  const credential = await credentialsRepository.findCredentialByIdAndUserId(
    userId,
    credentialId
  );

  if (!credential) {
    throw {
      status: 404,
      message: "This credential doesn't exist or doesn't belong to you!",
    };
  }

  return credential;
}

export async function findCredentialByTitle(
  userId: number,
  credential: INewCredential
) {
  const { title } = credential;
  const credentialExist =
    await credentialsRepository.findCredentialByTitleAndUserId(userId, title);

  if (credentialExist) {
    throw {
      status: 409,
      message: "A credential with this title already exists!",
    };
  }

  return;
}
