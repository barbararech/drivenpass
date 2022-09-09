import { Networks } from "@prisma/client";

export type INewNetwork = Omit<Networks, "id">;
