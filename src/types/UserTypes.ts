import { Users } from "@prisma/client";

export type NewUser = Omit<Users, "id">;

