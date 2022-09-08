import client from "../dbStrategy/database";
import * as UserTypes from "../types/UserTypes";

export async function findUserByEmail(email: string) {
  return client.users.findFirst({
    where: { email },
  });
}

export async function findUserById(id: number) {
  return client.users.findFirst({
    where: { id },
  });
}

export async function insertNewUser(user: UserTypes.NewUser) {
  return client.users.create({
    data: user,
  });
}
