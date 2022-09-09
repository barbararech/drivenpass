import { Credentials } from "@prisma/client";

export type INewCredential = Omit<Credentials, "id">;