import joi from "joi";
import { INewUser } from "../types/UserTypes";

export const signUpSchema = joi.object<INewUser>({
    email: joi.string().email().max(200).required(),
    password: joi.string().min(10).required(),
});

export const signInSchema = joi.object<INewUser>({
    email: joi.string().email().max(200).required(),
    password: joi.string().required(),
});