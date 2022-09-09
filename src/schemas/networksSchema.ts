import joi from "joi";
import { INewNetwork } from "../types/networkTypes";

export const newNetworkSchema = joi.object<INewNetwork>({
  networkName: joi.string().required(),
  password: joi.string().required(),
  title: joi.string().required(),
});
