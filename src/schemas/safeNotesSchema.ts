import joi from "joi";
import { INewSafeNote } from "../types/safeNoteTypes";

export const newSafeNoteSchema = joi.object<INewSafeNote>({
  title: joi.string().max(50).required(),
  description: joi.string().max(1000).required(),
});
