import joi from "joi";
import { INewCredential } from "../types/CredentialTypes";

export const newCredentialSchema = joi.object<INewCredential>({
  url: joi.string().uri().required(),
  username: joi.string().required(),
  title: joi.string().required(),
  password: joi.string().min(10).required(),
});
