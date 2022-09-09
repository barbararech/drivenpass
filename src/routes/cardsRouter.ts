import { Router } from "express";
import { middleware } from "../middlewares/schemasValidationMiddleware";
import { tokenValidationMiddleware } from "../middlewares/authValidationMiddleware";
import * as cardsController from "../controllers/cardsController";
import { newCardSchema } from "../schemas/cardsSchema";

const router = Router();

router.post(
  "/cards",
  tokenValidationMiddleware,
  middleware(newCardSchema),
  cardsController.newCard
);

router.get(
  "/cards",
  tokenValidationMiddleware,
  cardsController.viewAllCards
);

router.get(
  "/cards/:id",
  tokenValidationMiddleware,
  cardsController.viewCardById
);

router.delete(
  "/cards/:id",
  tokenValidationMiddleware,
  cardsController.deleteCard
);

export default router;
