import client from "../dbStrategy/database";
import { INewSafeNote } from "../types/safeNoteTypes";

export async function insertNewSafeNote(safeNote: INewSafeNote) {
  return client.safeNotes.create({
    data: safeNote,
  });
}

export async function findSafeNoteByTitleAndUserId(
  userId: number,
  title: string
) {
  return client.safeNotes.findFirst({
    where: { userId, title },
  });
}

export async function findSafeNoteByIdAndUserId(
  userId: number,
  safeNoteId: number
) {
  return client.safeNotes.findFirst({
    where: { id: safeNoteId, userId },
  });
}

export async function findAllSafeNotes(userId: number) {
  return client.safeNotes.findMany({
    where: { userId },
  });
}

export async function deleteSafeNote(id: number) {
  return client.safeNotes.delete({
    where: { id },
  });
}
