import * as userService from "../services/userService";
import * as safeNotesRepository from "../repositories/safeNotesRepository";
import { INewSafeNote } from "../types/safeNoteTypes";
import Cryptr from "cryptr";

export async function newSafeNote(
  userId: number,
  safeNote: INewSafeNote
) {

  const user = await userService.findUserById(userId);

  await findSafeNoteByTitle(userId, safeNote);

  await safeNotesRepository.insertNewSafeNote({
    ...safeNote,
    userId,
  });

  return;
}

export async function viewAllSafeNotes(userId: number) {
  const safeNotes = await safeNotesRepository.findAllSafeNotes(userId);

  return safeNotes;
}

export async function viewSafeNoteById(userId: number, safeNoteId: number) {
  const safeNote = await safeNoteExist(userId, safeNoteId);

  return safeNote;
}

// export async function deleteSafeNote(userId: number, safeNoteId: number) {
//   await safeNoteExist(userId, safeNoteId);
//   await safeNotesRepository.deleteSafeNote(safeNoteId);

//   return;
// }

export async function findSafeNoteByTitle(
  userId: number,
  safeNote: INewSafeNote
) {
  const { title } = safeNote;
  const safeNoteExist =
    await safeNotesRepository.findSafeNoteByTitleAndUserId(userId, title);

  if (safeNoteExist) {
    throw {
      status: 409,
      message: "A safe note with this title already exists!",
    };
  }

  return;
}

export async function safeNoteExist(userId: number, safeNoteId: number) {
  const safeNote = await safeNotesRepository.findSafeNoteByIdAndUserId(
    userId,
    safeNoteId
  );

  if (!safeNote) {
    throw {
      status: 404,
      message: "This safe note doesn't exist or doesn't belong to you!",
    };
  }

  return safeNote;
}