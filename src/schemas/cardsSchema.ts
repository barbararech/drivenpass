import joi from "joi";
import { INewCard } from "../types/cardTypes";

export const newCardSchema = joi.object<INewCard>({
  cardNumber: joi
    .string()
    .required()
    .pattern(/^[0-9]{16}$/),
  cardholder: joi.string().required(),
  securityCode: joi
    .string()
    .required()
    .pattern(/^[0-9]{3}$/),
  expirationDate: joi
    .string()
    .required()
    .pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/),
  password: joi.string().required(),
  isVirtual: joi.boolean().required(),
  type: joi
    .string()
    .required()
    .valid("creditCard", "debitCard", "creditAndDebitCard"),
  title: joi.string().required(),
});
