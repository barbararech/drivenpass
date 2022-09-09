import { Request, Response } from "express";
import * as safeNotesService from "../services/safeNotesServices";
import * as SafeNoteTypes from "../types/safeNoteTypes";

export async function newSafeNote(req: Request, res: Response) {
  const userId: number = res.locals.id;
  const SafeNote: SafeNoteTypes.INewSafeNote = req.body;

  await safeNotesService.newSafeNote(userId, SafeNote);

  return res.status(200).send("Safe note created successfully!");
}

export async function viewAllSafeNotes(req: Request, res: Response) {
  const userId: number = res.locals.id;

  const safeNotes = await safeNotesService.viewAllSafeNotes(userId);

  return res.status(200).send(safeNotes);
}

// export async function viewSafeNoteById(req: Request, res: Response) {
//   const userId: number = res.locals.id;
//   const safeNoteId: number = Number(req.params.id);

//   const safeNote = await safeNotesService.viewSafeNoteById(
//     userId,
//     safeNoteId
//   );

//   return res.status(200).send(safeNote);
// }

// export async function deleteSafeNote(req: Request, res: Response) {
//   const userId: number = res.locals.id;
//   const safeNoteId: number = Number(req.params.id);

//   await safeNotesService.deleteSafeNote(
//     userId,
//     safeNoteId
//   );

//   return res.status(200).send("Safe note successfully deleted!");
// }