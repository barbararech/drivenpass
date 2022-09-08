import * as userRepository from "../repositories/userRepository";
import * as UserTypes from "../types/UserTypes";

export async function findUserByEmail(email: string) {
  const user = await userRepository.findUserByEmail(email);
  return user;
}

export async function findUserById(id: number) {
  const user = await userRepository.findUserById(id);
  return user;
}

export async function insertNewUser(user: UserTypes.NewUser) {
  await userRepository.insertNewUser(user);

  return;
}
