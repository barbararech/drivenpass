import { Router } from "express";
import { middleware } from "../middlewares/schemasValidationMiddleware";
import { tokenValidationMiddleware } from "../middlewares/authValidationMiddleware";
import * as safeNotesController from "../controllers/safeNotesController";
import { newSafeNoteSchema } from "../schemas/safeNotesSchema";

const router = Router();

router.post(
  "/safenotes",
  tokenValidationMiddleware,
  middleware(newSafeNoteSchema),
  safeNotesController.newSafeNote
);

router.get(
  "/safenotes",
  tokenValidationMiddleware,
  safeNotesController.viewAllSafeNotes
);

router.get(
  "/safenotes/:id",
  tokenValidationMiddleware,
  safeNotesController.viewSafeNoteById
);

router.delete(
  "/safenotes/:id",
  tokenValidationMiddleware,
  safeNotesController.deleteSafeNote
);

export default router;
