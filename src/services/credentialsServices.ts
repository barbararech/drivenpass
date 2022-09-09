import * as userService from "../services/userService";
import * as credentialsRepository from "../repositories/credentialsRepository";
import { INewCredential } from "../types/CredentialTypes";
import Cryptr from "cryptr";

export async function newCredential(id: number, credential: INewCredential) {
  const cryptr = new Cryptr(process.env.CRYPTR_SECRET as string);
  const encryptedPassword = cryptr.encrypt(credential.password);
  credential["password"] = encryptedPassword;

  const user = await userService.findUserById(id);

  await findCredentialByTitle(id, credential);

  await credentialsRepository.insertNewCredential({
    ...credential,
    userId: user.id,
  });

  return;
}

export async function findCredentialByTitle(
  id: number,
  credential: INewCredential
) {
  const { title } = credential;
  const credentialExist = await credentialsRepository.findCredentialByTitle(
    id,
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
