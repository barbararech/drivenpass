import * as userRepository from "../repositories/userRepository";

export async function findUserByEmail(email: string) {
  const user = await userRepository.findUserByEmail(email);

  if (user) {
    throw { status: 409, message: "This user is already registered!" };
  }

  return;
}

export async function insertNewUser(user: userRepository.NewUser) {
  await userRepository.insertNewUser(user);

  return;
}
