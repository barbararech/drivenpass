import joi from "joi";

export const newCredentialSchema = joi.object({
  url: joi.string().uri().required(),
  username: joi.string().required(),
  title: joi.string().required(),
  password: joi.string().min(10).required(),
});
