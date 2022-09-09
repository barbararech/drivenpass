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
  return credentials;
}

export async function findCredentialByTitle(
  userId: number,
  credential: INewCredential
) {
  const { title } = credential;
  const credentialExist = await credentialsRepository.findCredentialByTitle(
    userId,
    title
  );

  if (credentialExist) {
    throw {
      status: 409,
      message: "A credential with this title already exists!",
    };
  }

  return;
}
