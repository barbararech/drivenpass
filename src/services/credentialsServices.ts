import * as userService from "../services/userService";
import * as credentialsRepository from "../repositories/credentialsRepository";
import { INewCredential } from "../types/credentialTypes";
import { encrypt, decrypt } from "../utils/criptrUtils";

export async function newCredential(
  userId: number,
  credential: INewCredential
) {
  const encryptedPassword = encrypt(credential.password);
  credential["password"] = encryptedPassword;

  await userService.findUserById(userId);

  await findCredentialByTitle(userId, credential);

  await credentialsRepository.insertNewCredential({
    ...credential,
    userId,
  });

  return;
}

export async function viewAllCredentials(userId: number) {
  const credentials = await credentialsRepository.findAllCredentials(userId);

  credentials.map((credential) => {
    const decryptedPassword = decrypt(credential.password);
    credential["password"] = decryptedPassword;
  });

  return credentials;
}

export async function viewCredentialById(userId: number, credentialId: number) {
  const credential = await credentialExist(userId, credentialId);

  const encryptedPassword = decrypt(credential.password);
  credential["password"] = encryptedPassword;

  return credential;
}

export async function deleteCredential(userId: number, credentialId: number) {
  await credentialExist(userId, credentialId);
  await credentialsRepository.deleteCredential(credentialId);

  return;
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
