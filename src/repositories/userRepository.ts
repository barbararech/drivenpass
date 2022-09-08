import client from "../dbStrategy/database";
import { Users } from "@prisma/client";

export type NewUser = Omit<Users, "id">;

export async function findUserByEmail(email: string) {
  return client.users.findFirst({
    where: { email },
  });
}

export async function insertNewUser(user: NewUser) {
  return client.users.create({
    data: user,
  });
}
