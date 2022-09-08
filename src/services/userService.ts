import * as userRepository from "../repositories/userRepository";

export type ActionTypes = "signUp" | "signIn";

export async function findUserByEmail(email: string, actionType: ActionTypes) {
  const user = await userRepository.findUserByEmail(email);
  return user;
}

export async function insertNewUser(user: userRepository.NewUser) {
  await userRepository.insertNewUser(user);

  return;
}
