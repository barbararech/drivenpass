import { Router } from "express";
import { middleware } from "../middlewares/schemasValidationMiddleware";
import { tokenValidationMiddleware } from "../middlewares/authValidationMiddleware";
import * as safeNotesController from "../controllers/safeNotesController";
import { newSafeNoteSchema } from "../schemas/safeNotesSchema";

const router = Router();

router.post(
  "/safeNotes",
  tokenValidationMiddleware,
  middleware(newSafeNoteSchema),
  safeNotesController.newSafeNote
);

// router.get(
//   "/safeNotes",
//   tokenValidationMiddleware,
//   safeNotesController.viewAllSafeNotes
// );

// router.get(
//   "/safeNotes/:id",
//   tokenValidationMiddleware,
//   safeNotesController.viewSafeNoteById
// );

// router.delete(
//   "/safeNotes/:id",
//   tokenValidationMiddleware,
//   safeNotesController.deleteSafeNote
// );

export default router;
