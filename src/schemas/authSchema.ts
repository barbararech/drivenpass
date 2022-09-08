import joi from "joi";

export const signUpSchema = joi.object({
    email: joi.string().email().max(200).required(),
    password: joi.string().min(10).required(),
});

export const signInSchema = joi.object({
    email: joi.string().email().max(200).required(),
    password: joi.string().required(),
});