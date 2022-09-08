import { Credentials } from "@prisma/client";

export type NewCredential = Omit<Credentials, "id">;